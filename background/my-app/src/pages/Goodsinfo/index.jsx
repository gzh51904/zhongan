import React, { Component } from 'react';

import { Breadcrumb, Icon, Table, Button,Divider, Spin,Alert } from 'antd';
import axios from 'axios';

import './Goodsinfo.scss'


class Goodsinfo extends Component {
    constructor() {
        super();
        this.state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        goodslist:[],
        // data: [],
        pagination: {},
        }

        this.modify = this.modify.bind(this);
    }
    componentDidMount() {
        this.fetch();
    }
    
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
        pagination: pager,
        });
        this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
        });
    };

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        axios({
            url: 'http://47.94.157.240:2017/zhongangoods',
            // url: 'http://47.94.157.240:2019/goodlist',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then(data => {
            console.log(data)
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                goodslist: data.data,
                pagination,
            });
        });
    };
  //
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
        this.setState({
            selectedRowKeys: [],
            loading: false,
        });
        }, 1000);
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    modify(){
        console.log(666)
        this.props.history.push('/modifygoods')
    }
    render(){
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const columns = [
            {
                title: 'Picture',
                align:'center',
                width: 100,
                // dataIndex: 'imgurl',
                render:(record) => {
                return <img src={record.imageUrl} alt="" style={{width:'100',height:'70px'}}/>
                }
            },
            {
                title: '产品名称',
                dataIndex: 'title',
                align:'center',
                width: 150,
            },
            {
                title: '产品关系',
                dataIndex: 'categoryOneName',
                align:'center',
                width: 100
            },
            {
                title: '价格',
                dataIndex: 'price',
                align:'center',
                width: 100
            },{
                title: '描述',
                dataIndex: 'summary',
                align:'center',
                width: 350
            },{
                title: '产品类型',
                dataIndex: 'categoryTwoName',
                align:'center',
                width: 100
            },{
                title: 'Action',
                key: 'action',
                align:'center',
                width: 160,
                render: (text, record) => (
                <span>
                    {/** <a className="modifyBtn" href="javascript:;">修改</a> */}
                    {/**<Button type="primary" size="small">修改</Button> */}
                    <Button type="primary" size="small" onClick={this.modify.bind(this)}>修改</Button>
                    <Divider type="vertical" />
                    {/** <a className="downBtn" href="javascript:;">下架</a> */}
                    <Button type="success" size="small">下架</Button>
                    <Divider type="vertical" />
                    {/** <a className="deleteBtn" href="javascript:;">删除</a> */}
                    <Button shape="circle" icon="delete" size="small" type="danger" />
                    <Divider type="vertical" />
                </span>
                )
            }
        ];
        
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                <Breadcrumb.Item>商品信息</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <div>
                        <div style={{ marginBottom: 16 }}>
                            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                Reload
                            </Button>
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                        </div>
                        
                        <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        rowKey={record => record._id}
                        dataSource={this.state.goodslist}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Goodsinfo;
import React, { Component } from 'react';

import { Breadcrumb, Table, message, Button, Divider, BackTop, Modal } from 'antd';
import axios from 'axios';

import './Goodsinfo.scss';

const { confirm } = Modal;

class Goodsinfo extends Component {
    constructor() {
        super();
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            goodslist: [],
            // data: [],
            pagination: {},
        }
        this.modifyItem = this.modifyItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
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
        // console.log('params:', params);
        this.setState({ loading: true });
        axios({
            url: 'http://47.94.157.240:2017/zhongangoods',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then(data => {
            // console.log("data",data)
            // console.log("datadata",data.data)
            // console.log("len",data.data.data.length)
            const pagination = { ...this.state.pagination };
           
            message.success('商品加载成功！', 2.0)
            pagination.total = data.data.length;
            this.setState({
                loading: false,
                goodslist: data.data.data,
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
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    modifyItem(recordData) {
        // console.log(666)
        // console.log("recordData:", recordData)
        window.localStorage.setItem('param', recordData.goodsCode)
        this.props.history.push('/modifygoods')
    };
    removeItem(item){
        confirm({
            title: '你真的要删除该商品?',
            content: '删除后不可恢复！',
            onOk:()=> {
               // console.log("item",item)
                axios.delete('http://47.94.157.240:2017/zhongangoods',{params:{goodsCode:item.goodsCode}}
                ).then( (response) =>{
                    // console.log("删除成功")
                    message.success('商品删除成功！', 0.5)
                    this.fetch();
                }) 
                .catch(function (error) {
                    console.log(error)
                });
            },
            onCancel:()=>{
                message.success('取消删除！', 0.5)
            },
        });
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const columns = [
            {
                title: '图片',
                align: 'center',
                width: 100,
                // dataIndex: 'imgurl',
                render: (record) => {
                    return <img src={record.imageUrl} alt="" style={{ width: '100', height: '70px' }} />
                }
            },
            {
                title: '产品名称',
                dataIndex: 'title',
                align: 'center',
                width: 150,
            },
            {
                title: '产品关系',
                dataIndex: 'categoryOneName',
                align: 'center',
                width: 100
            },
            {
                title: '价格',
                dataIndex: 'price',
                align: 'center',
                width: 100
            }, {
                title: '描述',
                dataIndex: 'summary',
                align: 'center',
                width: 350
            }, {
                title: '产品类型',
                dataIndex: 'categoryTwoName',
                align: 'center',
                width: 100
            }, {
                title: '操作',
                key: 'action',
                align: 'center',
                width: 160,
                render: (text, record) => (
                    <span>
                        <Button type="primary" size="small" style={{margin:'3px 0px'}} onClick={this.modifyItem.bind(this, record)}>修改</Button>
                        <Divider type="vertical" />
                        <Button type="success" style={{margin:'3px 0px'}} size="small">下架</Button>
                        <Divider type="vertical" />
                        <Button shape="circle" icon="delete" size="small" type="danger" onClick={this.removeItem.bind(this, record)} />
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
                                批量操作
                        </Button>
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                        </div>
                        {
                            // 当列表清空时，userlist=data.data=[],ui框架会报错，故做此三目运算
                            this.state.goodslist.length===0
                            ?
                            <Table 
                                rowSelection={rowSelection}
                                columns={columns}
                                rowKey={record => record._id}
                                pagination={this.state.pagination}
                                loading={this.state.loading}
                                onChange={this.handleTableChange}
                            />
                            :
                            <Table
                                rowSelection={rowSelection}
                                columns={columns}
                                rowKey={record => record._id}
                                dataSource={this.state.goodslist}
                                pagination={this.state.pagination}
                                loading={this.state.loading}
                                onChange={this.handleTableChange}
                            />
                        }
                    </div>
                </div>
                <div className="backTop">
                    <BackTop visibilityHeight="200" />
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
                </div>
            </div>
        )
    }
}


export default Goodsinfo;
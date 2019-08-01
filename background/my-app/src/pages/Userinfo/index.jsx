import React, { Component } from 'react';

import { Breadcrumb, Table, message, Button, Divider, BackTop, Modal } from 'antd';
import axios from 'axios';

const { confirm } = Modal;

class Userinfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      userlist: [],
      pagination: {},
    }
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
        url: 'http://47.94.157.240:2017/users',
        // url: 'http://47.94.157.240:2019/goodlist',
        method: 'get',
        data: {
            results: 10,
            ...params,
        },
        type: 'json',
    }).then(data => {
      console.log("data",data)
      const pagination = { ...this.state.pagination };

        if(data.data===[]){
          this.setState({
            userlist: []
          })
        }else{
          message.success('用户加载成功！', 2.0)
          pagination.total = data.data.length;
          this.setState({
              loading: false,
              userlist: data.data,
              pagination,
          });
        }

    });
};
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
  delAccount(record){
    // console.log("record",record)
    console.log("record.phone",record.phone)
      confirm({
        title: '你真的要删除该用户?',
        content: '删除后不可恢复，请谨慎操作！',
        okType: 'danger',
        okText: 'Yes',
        cancelText: 'No',
        onOk:()=> {
            axios.delete('http://47.94.157.240:2017/reg',{params:{phone:record.phone}}
            ).then( (response) =>{
                // console.log("删除成功")
                message.success('用户删除中！', 0.5)
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
  render(){
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
      {
        title: '用户名',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: '密码',
        dataIndex: 'code',
        key: 'code'
      }, 
      {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 160,
        render: (text, record) => ( // record就是传入的信息，注意！注意！注意！
          <span>
            <Divider type="vertical" />
            <Button type="primary" size="small" style={{margin:'2px 0px'}}>查看</Button>
            <Divider type="vertical" />
            <br/>
            <Divider type="vertical" />
            <Button type="danger" size="small" style={{margin:'3px 0px'}} onClick={this.delAccount.bind(this,record)}>销户</Button>
            <Divider type="vertical" />
          </span>
        )
      }
    ];
    
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
          <Breadcrumb.Item>用户信息</Breadcrumb.Item>
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
          {
            this.state.userlist.length===0?null:
            <Table 
              rowSelection={rowSelection} 
              columns={columns} 
              rowKey={record => record._id}
              dataSource={this.state.userlist} 
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

export default Userinfo;
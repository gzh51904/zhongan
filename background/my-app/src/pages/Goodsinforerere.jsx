import React, { Component } from 'react';

import { Breadcrumb, Icon, Table, Button,Divider } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Picture',
    align:'center',
    width:'10%',
    // dataIndex: 'imgurl',
    render:(record) => {
      return <img src={record.imgurl} alt="" style={{width:'100',height:'70px'}}/>
    }
  },
  {
    title: '出发城市',
    dataIndex: 'cityName',
    align:'center',
    width:'10%'
  },
  {
    title: '目的地',
    dataIndex: 'destinationCityName',
    align:'center',
    width:'10%',
  },
  {
    title: '价格',
    dataIndex: 'price',
    align:'center',
    width:'10%',
  },{
    title: '描述',
    dataIndex: 'productName',
    align:'center',
    width:'30%',
  },{
    title: '类型',
    dataIndex: 'productTypeName',
    align:'center',
    width:'10%',
  },{
    title: 'Action',
    key: 'action',
    align:'center',
    width:'20%',
    render: (text, record) => (
      <span>
        <a href="javascript:;">修改</a>
        <Divider type="vertical" />
        <a className="deleteBtn" href="javascript:;">删除</a>
        <Divider type="vertical" />
        <a href="javascript:;">下架</a>
      </span>
    )
  }
];

class Goodsinfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      goodslist:[]
    }
  }
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

  // 在此生命周期函数请求
  async componentWillMount(){
    let {data} = await axios.get("http://47.94.157.240:2019/goodlist")
    let goodslist = data
    console.log("goodslist",goodslist)
    this.setState({
      goodslist
    })
  }

  
  render(){
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
          <Breadcrumb.Item>添加用户</Breadcrumb.Item>
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
            
            <Table rowKey={record => record.productId} rowSelection={rowSelection} columns={columns} dataSource={this.state.goodslist}>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}


export default Goodsinfo;
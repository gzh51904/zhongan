import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Upload, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;


const fileList = [];
const props2= [];
// const fileList = [
//   {
//     uid: '-1',
//     name: 'xxx.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   }
// ];

// const props2 = {
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   listType: 'picture',
//   defaultFileList: [...fileList],
//   className: 'upload-list-inline',
// };

class Modifygoods extends Component {
  constructor() {
    super();
    this.state = {
      fileList :[
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ],
      props2 : {
        action: 'http://47.94.157.240:2017/upload',
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
      }
    }
  }
  render(){
    
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
          <Breadcrumb.Item>修改商品</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <label>图片</label>
          <br />
          <Upload {...props2}>
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
          <br/>
          <label>产品名称</label>
          <Search
            placeholder="请输入"
            enterButton="提交"
            size="large"
            onSearch={value => console.log(value)}
          />
          <br />
          <label>产品关系</label>
          <InputGroup compact >
            <Select style={{ width: '30%' }} defaultValue="">
              <Option value="Trip">旅行</Option>
              <Option value="Qinzi">亲子</Option>
              <Option value="Jiacai">家财</Option>
              <Option value="Jiankang">健康</Option>
              <Option value="Yiwai">意外</Option>
            </Select>
          </InputGroup>
          <br/>
          <label>价格</label>
          <Search
            placeholder="请输入"
            enterButton="提交"
            size="large"
            onSearch={value => console.log(value)}
          />
          <br/>
          <label>描述</label>
          <div>
            <TextArea
              placeholder="Autosize height with minimum and maximum number of lines"
              autosize={{ minRows: 2, maxRows: 6 }}
            />
          </div>
          <br/>
          <label>产品类型</label>
          <Search
            placeholder="请输入"
            enterButton="提交"
            size="large"
            onSearch={value => console.log(value)}
          />
        
        </div>
      </div>
    )
  }
}


export default Modifygoods;
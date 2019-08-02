import React, { Component } from 'react';

import axios from 'axios';

import { message, Form, Breadcrumb, Input, Button } from 'antd';

class RegistrationForm extends Component {
    constructor() {
      super();
      this.state = {
        // addinfo:{
        //   phone: "",
        //   code: ""
        // },
      }
    }
    handleSubmit = e => {//提交函数，在此函数中你可以通过getFieldsValue方法拿到表单数据
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          let info = values;
          // console.log("info",info)
          axios.post('http://47.94.157.240:2017/reg',{params:info})
          .then( (response) =>{
              message.success('用户添加成功！', 1.5)
              // 重置表单输入为空
              this.props.form.resetFields();
          }) 
          .catch(function (error) {
            console.log(error)
          });
        }
      });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
          <div className="bigBox">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
              <Breadcrumb.Item>添加用户信息</Breadcrumb.Item>
            </Breadcrumb>
            <div className="inputContent" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="用户名" className="phone">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入', whitespace: true }],
                      })(<Input placeholder="请输入"  />)}
                    </Form.Item>
                    <Form.Item label="密码" className="code">
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: '请输入', whitespace: true }],
                      })(<Input  placeholder="请输入"/>)}
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        )
    }
}

const Modifygoods = Form.create()(RegistrationForm);

export default Modifygoods;
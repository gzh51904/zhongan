import React, { Component } from 'react';

import axios from 'axios';

import { message,notification , Checkbox,Tooltip,Card,Form, Layout, Menu, Breadcrumb, Icon, Input, Col, Row, Select,BackTop , InputNumber, DatePicker, AutoComplete, Cascader, Upload, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { Dragger } = Upload;


// 上传图片
const props = {
    name: 'zhongan', // name要与后端upload.js中的（Router.post('/zhongan',upload.single('zhongan'),）一致
    action: 'http://47.94.157.240:2017/upload/zhongan',
    // thumbUrl: ' "http://47.94.157.240:2017/" + fileList[0].response.path',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
};  

// 通知提醒框
const Modifygoodssuccess = type => {
    notification[type]({
      message: '修改商品成功',
      description:
        '你上传的商品已成功添加到数据库，你可以选择继续添加商品或者进入商品信息界面查看'
    });
};

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            from:{
                categoryOne: "9",
                categoryOneName: "",
                categoryTwo: "23",
                categoryTwoName: "",
                channelCode: "94",
                dataType: "GOODSV2",
                extraInfo: "",
                imageUrl: "",
                price: "",
                priceRemark: "",
                remark1: "0",
                remark2: "",
                remark3: "",
                summary: "",
                title: "",
                unit: "起",
                url: "https://digital.zhongan.com/h5/zauav/uavIndex.htm",
                goodsCode: "85532001"
            },
            showCart:""
        }
    }
    componentWillMount(){
      let dataid = (JSON.parse(window.localStorage.getItem("param")));
      console.log("dataid",dataid)
      // axios.put('http://47.94.157.240:2017/zhongangoods',{})

      axios.get('http://47.94.157.240:2017/zhongangoods',{params:{goodsCode:dataid}}) 
        .then( ({data}) =>{
          console.log("data",data)
          // console.log("img",data[0].imageUrl)
          this.setState({
            form : data,
            showCart: data[0].imageUrl
          })
          console.log("form",this.state.form) 
          // this.props.form.resetFields();
          // console.log("this.state.showCart",this.state.showCart) 
          setTimeout(()=>{
            const formData = {
              'title':data[0].title,
              'categoryOneName':data[0].categoryOneName,
              // 'imageUrl':data[0].imageUrl, // 图片渲染错地方了，会报错Warning: You cannot set a form field before rendering a field associated with the value.
              'price':data[0].price,
              'summary':data[0].summary,
              'categoryTwoName':data[0].categoryTwoName
            }
            this.props.form.setFieldsValue(formData)
            // this.props.form.setFieldsValue({
            //     'title':data[0].title,
            //     'categoryOneName':data[0].categoryOneName,
            //     'imageUrl':data[0].imageUrl,
            //     'price':data[0].price,
            //     'summary':data[0].summary,
            //     'categoryTwoName':data[0].categoryTwoName
            // })
            // this.props.form.setFieldsValue(this.state.form);
          },0)
          // console.log("this.props.form",this.props.form)
        }) 
        .catch(function (error) {
        console.log(error);
      }) 
      
      }
    handleSubmit = e => {//提交函数，在此函数中你可以通过getFieldsValue方法拿到表单数据
        e.preventDefault();
        console.log(666)
        this.props.form.validateFieldsAndScroll((err, values) => {
            // console.log("this.props.form",this.props.form)
          if (!err) {
            // console.log('Received values of form: ', values);

            // 设置imageUrl成为values的属性并赋值
            let { imageUrl,goodsCode } = this.state
            values.imageUrl = JSON.stringify(imageUrl);
            values.goodsCode = JSON.stringify(goodsCode);
            console.log('values', values);

            values.imageUrl =  'http://47.94.157.240:2017/' + values.pictureData[0].response.path
            values.goodsCode = Date.now().toString() // 将Date.now()转为字符串
            // http://47.94.157.240:2019/uploads\chunqiu-1564310841519.jpg
            let info = values;
            console.log("info",info)  
            
            // 先删后插入修改后的
            // axios.all([
            //   axios.delete('http://47.94.157.240:2017/zhongangoods',{params:{goodsCode:item.goodsCode}}),
            //   axios.post('http://47.94.157.240:2017/zhongangoods',{params:{goodsCode:this.state.form.goodsCode}})
            // ])
            // .then( (response) =>{
            //     // console.log("删除成功")
            //     message.success('商品更新成功！', 1.5)
            // this.fetch();
            // }) 
            // .catch(function (error) {
            //     console.log(error)
            // }) ;
            // 先删后插入修改后的
            axios.post('http://47.94.157.240:2017/zhongangoods/q',{...info})
            .then( (response) =>{
                console.log("删除成功")
                message.success('商品更新成功！', 1.5)
            this.fetch();
            }) 
            .catch(function (error) {
                console.log(error)
            }) ;
          }
      });
    };
    normFile = e => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };
    render(){
        // const { getFieldDecorator } = this.state.form;
        const { getFieldDecorator } = this.props.form;
       
        // console.log("data",JSON.parse(window.localStorage.getItem("param")))

        return (
            <div className="bigBox">
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                <Breadcrumb.Item>修改商品</Breadcrumb.Item>
                </Breadcrumb>
                <div className="inputContent" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="产品名称" className="title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: '请输入', whitespace: true }],
                          })(<Input placeholder="请输入"  />)}
                        </Form.Item>
                        <Form.Item label="产品关系" className="categoryOneName">
                            <InputGroup compact >
                        {getFieldDecorator('categoryOneName', {
                            rules: [{ required: true, message: '请输入', whitespace: true }],
                          })(
                                <Select style={{ width: '30%' }} initialValue=""  placeholder="请选择">
                                    <Option value="旅行">旅行</Option>
                                    <Option value="亲子">亲子</Option>
                                    <Option value="家财">家财</Option>
                                    <Option value="健康">健康</Option>
                                    <Option value="意外">意外</Option>
                                </Select>)}
                            </InputGroup>
                        </Form.Item>
                        <Form.Item label="图片" className="pictureData" style={{ width: 300 }}>
                            {getFieldDecorator('pictureData', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                })(
                                    <Dragger {...props} >
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            点击或拖拽上传图片
                                        </p>
                                    </Dragger>
                                )
                            }
                            <Card style={{ width: 200 }} cover={<img alt="example" src={this.state.showCart}/> }>
                            修改前的图片</Card>
                        </Form.Item>
                        <Form.Item label="价格" className="price">
                        {getFieldDecorator('price', {
                            rules: [{ required: true, message: '请输入', whitespace: true }],
                          })(<Input  placeholder="请输入"/>)}
                        </Form.Item>
                        <Form.Item label="描述" className="summary">
                        {getFieldDecorator('summary', {
                            rules: [{ required: true, message: '请输入', whitespace: true }],
                          })(
                            <TextArea
                                placeholder="请输入"
                                autosize={{ minRows: 2, maxRows: 6 }}
                            />)}
                        </Form.Item>
                        <Form.Item label="产品类型" className="categoryTwoName">
                            <InputGroup compact >
                            {getFieldDecorator('categoryTwoName', {
                                rules: [{ required: true, message: '请输入', whitespace: true }],
                                })(<Select style={{ width: '30%' }} initialValue=""  placeholder="请选择">
                                    <Option value="家人保障">家人保障</Option>
                                    <Option value="固定资产">固定资产</Option>
                                    <Option value="空中飞人">空中飞人</Option>
                                    <Option value="关爱父母">关爱父母</Option>
                                    <Option value="儿童重疾">儿童重疾</Option>
                                    <Option value="成人必备">成人必备</Option>
                                    <Option value="儿童意外">儿童意外</Option>
                                    <Option value="老年人意外">老年人意外</Option>
                                    <Option value="境内旅游">境内旅游</Option>
                                    <Option value="汽车保险">汽车保险</Option>
                                    <Option value="其他">其他</Option>
                                </Select>)}
                            </InputGroup>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" onClick={() => Modifygoodssuccess('success')} >
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="backTop">
                    <BackTop visibilityHeight="200"/>
                    <strong  style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
                </div>
                
            </div>
        )
    }
}

const Modifygoods = Form.create()(RegistrationForm);


export default Modifygoods;
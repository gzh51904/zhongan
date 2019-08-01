import React, { Component } from 'react';

import axios from 'axios';

import { message, Card, Form, Select, Breadcrumb, Icon, Input, BackTop, Upload, Button, Modal } from 'antd';

import './Modifygoods.scss';

const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            form:{
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
                goodsCode: ""
            },
            showCart:"",
            previewVisible: false,
            previewImage: '',
            fileList: []
        }
    }
    // =================
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
      });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
  // =========
    componentWillMount(){ 
      // let dataid = (JSON.parse(window.localStorage.getItem("param")));
      let dataid = window.localStorage.getItem("param");
      console.log("dataid",dataid)
      // axios.put('http://47.94.157.240:2017/zhongangoods',{})
      if(dataid===null){
        // setTimeout(()=>{
        //   this.props.history.push('/goodsinfo')
        // },3000)
      }else{
        axios.get('http://47.94.157.240:2017/zhongangoods',{params:{goodsCode:dataid}}) 
          .then( ({data}) =>{
            // console.log("data",data)
            // console.log("img",data[0].imageUrl)
            this.setState({
              form : data,
              showCart: data[0].imageUrl,
            })
            console.log("form",this.state.form) 
            // this.props.form.resetFields();
            // console.log("this.state.showCart",this.state.showCart) 
            setTimeout(()=>{
              const formData = {
                title:data[0].title,
                categoryOneName:data[0].categoryOneName,
                // imageUrl:data[0].imageUrl, // 图片渲染错地方了，会报错Warning: You cannot set a form field before rendering a field associated with the value.
                price:data[0].price,
                summary:data[0].summary,
                categoryTwoName:data[0].categoryTwoName,
              }
              this.props.form.setFieldsValue(formData)
            },0)
            // console.log("this.props.form",this.props.form)
          }) 
          .catch(function (error) {
          console.log(error);
        }) 
      }
    }
    handleSubmit = e => {//提交函数，在此函数中你可以通过getFieldsValue方法拿到表单数据
        e.preventDefault();
        // console.log(666)
        this.props.form.validateFieldsAndScroll((err, values) => {
            // console.log("this.props.form",this.props.form)
            
            if (!err) {
            // console.log('Received values of form: ', values);
            // 设置imageUrl成为values的属性并赋值
            let { imageUrl,goodsCode } = this.state.form;
            values.imageUrl = JSON.stringify(imageUrl);
            values.goodsCode = JSON.stringify(goodsCode);
            // console.log("values",values)
            
            // 先删后插入修改后的
            let info = values;
            if(values.pictureData===undefined){
              values.imageUrl=this.state.form.imageUrl;
              message.success('请重新上传图片', 1.5)
            }else{
              // values.goodsCode = (JSON.parse(window.localStorage.getItem("param")))
              values.goodsCode = window.localStorage.getItem("param")
              values.imageUrl =  'http://47.94.157.240:2017/' + values.pictureData[0].response.path;
              // http://47.94.157.240:2019/uploads\chunqiu-1564310841519.jpg
              axios.post('http://47.94.157.240:2017/zhongangoods/q',{...info})
              .then( (response) =>{
                  console.log("删除成功")
                  message.success('商品修改成功！', 1.5)
                  console.log("values",values)
                  // this.fetch();
                  // 重置表单输入为空
                  this.props.form.resetFields();
                  window.localStorage.removeItem('param')
                  this.setState({
                    showCart:'',
                    fileList: []
                  })
                }) 
                .catch(function (error) {
                  console.log(error)
                }) ;
              }
            }
          });
    };
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };
    render(){
        // const { getFieldDecorator } = this.state.form;
        const { getFieldDecorator } = this.props.form;
       
        // console.log("data",JSON.parse(window.localStorage.getItem("param")))
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        return (
          <div className="bigBox">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
              <Breadcrumb.Item>修改商品</Breadcrumb.Item>
            </Breadcrumb>
            <div className="inputContent" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Form onSubmit={this.handleSubmit} className="inputContentSon">
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
                        <Select style={{ width: '30%' }} initialValue="" placeholder="请选择">
                            <Option value="旅行">旅行</Option>
                            <Option value="亲子">亲子</Option>
                            <Option value="家财">家财</Option>
                            <Option value="健康">健康</Option>
                            <Option value="意外">意外</Option>
                        </Select>)}
                      </InputGroup>
                    </Form.Item>
                    <Form.Item label="图片(请重新上传图片)" className="pictureData" >
                      {getFieldDecorator('pictureData', {
                          valuePropName: 'fileList',
                          getValueFromEvent: this.normFile,
                          })(
                            <Upload 
                              name='zhongan'
                              action="http://47.94.157.240:2017/upload/zhongan"
                              listType="picture-card"
                              // fileList={fileList}
                              onPreview={this.handlePreview}
                              onChange={this.handleChange}
                            >
                            {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                          )
                        }
                      <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                      </Modal>
                    </Form.Item>
                    <Card className="picCart" style={{ width: 102 }} cover={<img alt="example" src={this.state.showCart}/>}>
                      <p>修改前的图片</p>
                    </Card>
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
                        <Button type="primary" htmlType="submit">
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
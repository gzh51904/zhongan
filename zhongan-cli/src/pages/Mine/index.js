import React, { Component } from 'react';
import './Mine.scss'
import axios from 'axios'
import { connect } from 'react-redux';
import { change_login_status } from '../../store/Actions'

//http://v.juhe.cn/sms/send?mobile=手机号码&tpl_id=短信模板ID&tpl_value=%23code%23%3D654654&key=
class Mine extends Component {
    constructor() {
        super();

        this.state = {
            animation:'',
            showlog: false,
            showlogbox: true,
            currentid: 1,
            keyword: '',
            keyword2: '',
            code: '',
            password: '',

            loginstatus: false,

            //注册框切换显示隐藏状态
            mimadenglu: 'none',
            yanzhengmadenglu: 'block',

            //注册框
            zhanghao: false,
            yanzhengma: false
        }

        this.changekeyword = this.changekeyword.bind(this)
        this.changekeyword2 = this.changekeyword2.bind(this)
        this.sendcode = this.sendcode.bind(this)
        this.changecode = this.changecode.bind(this)
        this.logout = this.logout.bind(this)
        this.mimadenglu = this.mimadenglu.bind(this)
        this.changepassword = this.changepassword.bind(this)

    }

    changekeyword() {
        this.setState({
            keyword: this.refs.keyword.value
        })
    }
    changekeyword2() {
        this.setState({
            keyword2: this.refs.keyword2.value
        })
    }
    changecode() {
        this.setState({
            code: this.refs.code.value
        })
    }
    changepassword() {
        this.setState({
            password: this.refs.password.value
        })
    }

    async zhuchedenglu() {
        let { changeloginstatus } = this.props;
        //     /^[1]([3-9])[0-9]{9}$/
        let phone = this.state.keyword;
        let code = this.state.code;
        let ret = /^[1]([3-9])[0-9]{9}$/;
        if (ret.test(phone)) {
            await axios.get('/reg/check', {
                params: {
                    phone: phone
                }
            }).then(({ data }) => {
                if (data.status === 301) {
                    alert('该账号已被注册')
                } else if (data.status === 200) {
                    this.setState({
                        zhanghao: true
                    })
                }
            })

            if (this.state.zhanghao && this.state.yanzhengma) {
                localStorage.setItem('Authorization', phone)
                changeloginstatus(true)
                this.setState({
                    loginstatus: true,
                    showlog: false
                })
            }
        } else {
            alert('请输入正确的手机号码')
        }
    }

    async sendcode() {
        let phone = this.state.keyword;
        let ret = /^[1]([3-9])[0-9]{9}$/;
        if (ret.test(phone)) {
            await axios.post('/getcode', {
                params: {
                    phoneNum: phone
                }
            }).then(({data})=>{
                if(data.data===this.state.code){
                    this.setState({
                        yanzhengma : true
                    })
                }
            })
        }else{
            alert('请输入正确的手机号')
        }
    }

    logout() {
        let { changeloginstatus } = this.props;
        localStorage.removeItem('Authorization');
        this.setState({
            loginstatus: false
        })
        changeloginstatus(false)
    }

    async mimadenglu() {
        let { changeloginstatus } = this.props;
        let phone = this.state.keyword2;
        let password = this.state.password;
        await axios.post('/log', {
            params: {
                phone: phone,
                code: password
            }
        }).then(({ data }) => {
            if (data.status === 200) {
                localStorage.setItem('Authorization', phone)
                changeloginstatus(true)
                this.setState({
                    loginstatus: true,
                    showlog: false
                })
            } else if (data.status === 301) {
                alert('请输入正确的手机号码和密码')
            }
        })
    }

    render() {
        return <>
            <div className='My_home'>
                <div className="flex home_head">
                    <div className="flex home_head_content">
                        <div className="home_headImg">
                            <img alt="" src="https://dm-m.zacdn.cn/my/assets/images/common/default.png" />
                        </div>
                        {
                            localStorage.getItem("Authorization") ? (
                                <div className="home_headLog">
                                    <div className="username">{localStorage.getItem("Authorization")}</div>
                                    <button onClick={this.logout.bind(this)}>退出</button>
                                </div>
                            ) : (
                                    <div className="home_headLog">
                                        <p onClick={() => {
                                            this.setState({
                                                showlog: true,
                                                animation: 'denglukuang 0.3s linear'
                                            })
                                        }} className="dengluzhuce">
                                            <strong>登录/注册</strong>
                                        </p>
                                        <p className="jifen">登录享受更多特权与服务</p>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="card_type">
                    <a href="aa:;">
                        <i>
                            <img alt="" src='https://open-cdn.zhongan.com/dm-instrument/images/xlx2y3ybulygkqnqnblb9eahzmsnbbmiosesfuyt.png' />
                        </i>
                        <span>保单</span>
                    </a>
                    <a href="aa:;">
                        <i>
                            <img alt="" src='https://open-cdn.zhongan.com/dm-instrument/images/epill0zryijwjfboivsexntovkv0uojxkreuonhd.png' />
                        </i>
                        <span>理赔</span>
                    </a>
                    <a href="aa:;">
                        <i>
                            <img alt="" style={{ marginLeft: '4px' }} src='https://open-cdn.zhongan.com/dm-instrument/images/mowqcuoseqmq8xt3ynh7eopyceh12snp64oifjlc.png' />
                        </i>
                        <span>保险卡</span>
                    </a>
                </div>
                <div className="shadow">
                    <a href="aa:;">
                        <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/orsbuqgsiphmd13ikcuwrgfqjdigzt4fhu7gzqxp.jpg" />
                    </a>
                </div>
                <div className="linklist">
                    <div className="detail-list">
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/xvstqvdgz50gmsntpnyljzbjng4pxzyosnjuc3ss.png" />
                                </span>
                                <span className="ziti">
                                    保单查询
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/te2mosbwlfqnp8xtx49jgoqlmwucbf6nzgranfde.png" />
                                </span>
                                <span className="ziti">
                                    团险理赔
                            </span>
                            </a>
                        </div>
                    </div>
                    <div className="detail-list">
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/fnjt5ngprhj7qllzfew2xemvvk3h3ql8xuudataj.png" />
                                </span>
                                <span className="ziti">
                                    意见反馈
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/jq444l8forclww2swsvlro1tpphnelvl2b1zh1vd.png" />
                                </span>
                                <span className="ziti">
                                    关于众安
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt="" src="https://open-cdn.zhongan.com/dm-instrument/images/xk3nuzkly7ljshfawau91jomeeyqs0qv0vmhydek.png" />
                                </span>
                                <span className="ziti">
                                    下载APP
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="phone">客服电话<span>1010-9955</span></p>
            </div>
            {
                this.state.showlog ? (
                    <div className="My_logreg" style={{animation:this.state.animation}}>
                        <div className="logregbox">
                            <div className="box1">
                                <div className="topbox">
                                    <ul>
                                        <li onClick={() => {
                                            this.setState({
                                                showlogbox: false,
                                                currentid: 2,
                                                yanzhengmadenglu: 'none',
                                                mimadenglu: 'block'
                                            })
                                        }} className={this.state.currentid === 2 ? 'on' : null} >密码登录</li>
                                        <li onClick={() => {
                                            this.setState({
                                                showlogbox: true,
                                                currentid: 1,
                                                yanzhengmadenglu: 'block',
                                                mimadenglu: 'none'
                                            })
                                        }} className={this.state.currentid === 1 ? 'on' : null}>注册/登录</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box2">

                                <div className="item" style={{ display: this.state.yanzhengmadenglu }}>
                                    <div className="itembox">
                                        <input ref="keyword" value={this.state.keyword} onChange={this.changekeyword.bind(this)} type="tel" name="mobile" maxLength="11" autoComplete="off" placeholder="请输入手机号" />
                                    </div>
                                    <div className="itembox">
                                        <input ref="code" value={this.state.code} onChange={this.changecode.bind(this)} type="text" name="verifycode" maxLength="6" autoComplete="off" placeholder="请输入验证码" />
                                        <span onClick={this.sendcode.bind(this)} className="get-captch">发送验证码</span>
                                    </div>
                                    <div className="subbtn">
                                        <button onClick={this.zhuchedenglu.bind(this)}>注册/登录</button>
                                    </div>
                                </div>

                                <div className="item" style={{ display: this.state.mimadenglu }}>
                                    <div className="itembox">
                                        <input ref="keyword2" value={this.state.keyword2} onChange={this.changekeyword2.bind(this)} type="text" name="logmobile" maxLength="18" autoComplete="off" placeholder="请输入手机号/用户名/身份证号" />
                                    </div>
                                    <div className="itembox">
                                        <input ref="password" value={this.state.password} onChange={this.changepassword.bind(this)} type="password" name="verifycode" maxLength="6" autoComplete="off" placeholder="请输入密码" />
                                    </div>
                                    <div className="subbtn">
                                        <button onClick={this.mimadenglu.bind(this)}>立即登录</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cancelbtn">
                                <div onClick={() => {
                                    this.setState({
                                        showlog: false
                                    })
                                }} className="btnbox"></div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    }
}

let mapStateToProps = (state, ownprops) => {
    return {

    }
}

let mapDispatchToProps = (dispatch, ownprops) => {
    return {
        changeloginstatus(buerzhi) {
            dispatch(change_login_status(buerzhi))
        }
    }
}

Mine = connect(mapStateToProps, mapDispatchToProps)(Mine);


export default Mine;
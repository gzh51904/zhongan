import React, { Component } from 'react';
import './Mine.scss'

class Mine extends Component {
    constructor() {
        super();
    }
    componentWillMount() {

    }
    render() {
        return <>
            <div className='My_home'>
                <div className="flex home_head">
                    <div className="flex home_head_content">
                        <div className="home_headImg">
                            <img alt='' src="https://dm-m.zacdn.cn/my/assets/images/common/default.png" />
                        </div>
                        <div className="home_headLog">
                            <p className="dengluzhuce">
                                <strong>登录/注册</strong>
                            </p>
                            <p className="jifen">登录享受更多特权与服务</p>
                        </div>
                    </div>
                </div>
                <div className="card_type">
                    <a href="aa:;">
                        <i>
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/xlx2y3ybulygkqnqnblb9eahzmsnbbmiosesfuyt.png' />
                        </i>
                        <span>保单</span>
                    </a>
                    <a href="aa:;">
                        <i>
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/epill0zryijwjfboivsexntovkv0uojxkreuonhd.png' />
                        </i>
                        <span>理赔</span>
                    </a>
                    <a href="aa:;">
                        <i>
                            <img style={{ marginLeft: '4px' }} alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/mowqcuoseqmq8xt3ynh7eopyceh12snp64oifjlc.png' />
                        </i>
                        <span>保险卡</span>
                    </a>
                </div>
                <div className="shadow">
                    <a href="aa:;">
                        <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/orsbuqgsiphmd13ikcuwrgfqjdigzt4fhu7gzqxp.jpg" />
                    </a>
                </div>
                <div className="linklist">
                    <div className="detail-list">
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/xvstqvdgz50gmsntpnyljzbjng4pxzyosnjuc3ss.png" />
                                </span>
                                <span className="ziti">
                                    保单查询
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/te2mosbwlfqnp8xtx49jgoqlmwucbf6nzgranfde.png" />
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
                                    <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/fnjt5ngprhj7qllzfew2xemvvk3h3ql8xuudataj.png" />
                                </span>
                                <span className="ziti">
                                    意见反馈
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/jq444l8forclww2swsvlro1tpphnelvl2b1zh1vd.png" />
                                </span>
                                <span className="ziti">
                                    关于众安
                            </span>
                            </a>
                        </div>
                        <div className="detail-listitem">
                            <a href="aa:;">
                                <span className="imgbox">
                                    <img alt='' src="https://open-cdn.zhongan.com/dm-instrument/images/xk3nuzkly7ljshfawau91jomeeyqs0qv0vmhydek.png" />
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
            <div style={{display:"none"}} className="My_logreg">
                <div className="logregbox">
                    <div className="box1">
                        <div className="topbox">
                            <ul>
                                <li>密码登录</li>
                                <li className="on">注册/登录</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box2">
                        <div style={{display:'none'}} className="item">
                            <div className="itembox">
                                <input type="tel" name="mobile" maxLength="18" autoComplete="off" placeholder="请输入手机号/用户名/身份证号" />
                            </div>
                            <div className="itembox">
                                <input type="tel" name="verifycode" maxLength="6" autoComplete="off" placeholder="请输入密码" />
                            </div>
                            <div className="subbtn">
                                <button>立即登录</button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itembox">
                                <input type="tel" name="mobile" maxLength="11" autoComplete="off" placeholder="请输入手机号" />
                            </div>
                            <div className="itembox">
                                <input type="tel" name="verifycode" maxLength="6" autoComplete="off" placeholder="请输入验证码" />
                                <span className="get-captch">发送验证码</span>
                            </div>
                            <div className="subbtn">
                                <button>注册/登录</button>
                            </div>
                        </div>
                    </div>
                    <div className="cancelbtn">
                        <div className="btnbox"></div>
                    </div>
                </div>
            </div>
        </>


    }
}

export default Mine;
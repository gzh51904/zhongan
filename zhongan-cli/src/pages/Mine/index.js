import React, { Component } from 'react';
import './Mine.scss'

class Mine extends Component {
    constructor() {
        super();
    }
    componentWillMount() {

    }
    render() {
        return <div className='My_home'>
            <div className="flex home_head">
                <div className="flex home_head_content">
                    <div className="home_headImg">
                        <img src="https://dm-m.zacdn.cn/my/assets/images/common/default.png" />
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
                <a href="javascript:void(0);">
                    <i>
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/xlx2y3ybulygkqnqnblb9eahzmsnbbmiosesfuyt.png' />
                    </i>
                    <span>保单</span>
                </a>
                <a href="javascript:void(0);">
                    <i>
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/epill0zryijwjfboivsexntovkv0uojxkreuonhd.png' />
                    </i>
                    <span>理赔</span>
                </a>
                <a href="javascript:void(0);">
                    <i>
                        <img style={{ marginLeft: '4px' }} src='https://open-cdn.zhongan.com/dm-instrument/images/mowqcuoseqmq8xt3ynh7eopyceh12snp64oifjlc.png' />
                    </i>
                    <span>保险卡</span>
                </a>
            </div>
            <div className="shadow">
                <a href="javascript:void(0);">
                    <img src="https://open-cdn.zhongan.com/dm-instrument/images/orsbuqgsiphmd13ikcuwrgfqjdigzt4fhu7gzqxp.jpg" />
                </a>
            </div>
            <div className="linklist">
                <div className="detail-list">
                    <div className="detail-listitem">
                        <a href="javascript:void(0);">
                            <span className="imgbox">
                                <img src="https://open-cdn.zhongan.com/dm-instrument/images/xvstqvdgz50gmsntpnyljzbjng4pxzyosnjuc3ss.png" />
                            </span>
                            <span className="ziti">
                                保单查询
                            </span>
                        </a>
                    </div>
                    <div className="detail-listitem">
                        <a href="javascript:void(0);">
                            <span className="imgbox">
                                <img src="https://open-cdn.zhongan.com/dm-instrument/images/te2mosbwlfqnp8xtx49jgoqlmwucbf6nzgranfde.png" />
                            </span>
                            <span className="ziti">
                                团险理赔
                            </span>
                        </a>
                    </div>
                </div>
                <div className="detail-list">
                    <div className="detail-listitem">
                        <a href="javascript:void(0);">
                            <span className="imgbox">
                                <img src="https://open-cdn.zhongan.com/dm-instrument/images/fnjt5ngprhj7qllzfew2xemvvk3h3ql8xuudataj.png" />
                            </span>
                            <span className="ziti">
                                意见反馈
                            </span>
                        </a>
                    </div>
                    <div className="detail-listitem">
                        <a href="javascript:void(0);">
                            <span className="imgbox">
                                <img src="https://open-cdn.zhongan.com/dm-instrument/images/jq444l8forclww2swsvlro1tpphnelvl2b1zh1vd.png" />
                            </span>
                            <span className="ziti">
                                关于众安
                            </span>
                        </a>
                    </div>
                    <div className="detail-listitem">
                        <a href="javascript:void(0);">
                            <span className="imgbox">
                                <img src="https://open-cdn.zhongan.com/dm-instrument/images/xk3nuzkly7ljshfawau91jomeeyqs0qv0vmhydek.png" />
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

    }
}

export default Mine;
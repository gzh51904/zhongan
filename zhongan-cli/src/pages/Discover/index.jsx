import React, { Component } from 'react';
import "./Discover.scss";
// import { Skeleton } from 'antd';
// <Skeleton active />
import { Carousel } from 'antd';
class Discover extends Component {
    constructor() {
       super();

        this.state = {
            img: [{
                name: 'pic1',
                imgurl: 'https://open-cdn.zhongan.com/dm/assembler/5ff8b5624db4e51e8a3a376a9925dfae.png'
            }, {
                name: 'pic2',
                imgurl: 'https://open-cdn.zhongan.com/dm/assembler/0a9cc7ad9ab358ee9ccdbedefe9343b1.png'
            }, {
                name: 'pic3',
                imgurl: 'https://open-cdn.zhongan.com/dm/assembler/76a26dc1d608466707205da3268828fe.png'
            }, {
                name: 'pic4',
                imgurl: 'https://open-cdn.zhongan.com/dm/assembler/893e6e1c65738fe4ee101f8fa966283f.jpg'
            }]
        }
    }
    render() {
        return (
            <div className="DisMain" style={{ width: '100%', height: '100%' }}>
                <div className="mainTop">
                    <header>我是顶部</header>
                </div>
                <div style={{ width: '100%', height: '170px',background:'orange' }}>

                </div>
                <Carousel className="DisMainCarousel" effect="fade" autoplay>
                    {
                        this.state.img.map(item => {
                            return (
                                <img key={item.name} src={item.imgurl} alt={item.name} style={{ width: '100%', height: '100%' }} />
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default Discover;
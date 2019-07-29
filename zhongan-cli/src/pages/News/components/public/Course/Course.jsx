import React from "react";
import './Course.scss';

class Course extends React.Component{
    constructor(){
        super();
        this.state={
            doctorList:[{
                title:'皮肤保养与化妆品选择',
                mesg:'吴艳·北京大学第一医院皮肤科主任医师',
                time:'21',
                studying:'905',
                imgurl:require('../../../img/doc1.png')
            },{
                title:'便秘的秘密',
                mesg:'李恒爽·朝阳医院西区肛肠科主任',
                time:'31',
                studying:'777',
                imgurl:require('../../../img/doc2.png')
            },{
                title:'如何早发现慢性支气管炎',
                mesg:'文富强·四川大学华西医院大内科主任',
                time:'22',
                studying:'41',
                imgurl:require('../../../img/doc3.png')
            },{
                title:'男性健康：理想的性生活应该持续多长时间',
                mesg:'姜辉·北京大学第三医院泌尿科外科副主任',
                time:'21',
                studying:'1540',
                imgurl:require('../../../img/doc4.png')
            },{
                title:'高血压全知道',
                mesg:'孙杨玲·北京大学人民医院高血压研究所主任',
                time:'27',
                studying:'63',
                imgurl:require('../../../img/doc5.png')
            },{
                title:'月经调理必备知识',
                mesg:'牛建韶·北京中医药大学原副校长',
                time:'18',
                studying:'3522',
                imgurl:require('../../../img/doc6.png')
            },{
                title:'皮肤保养与化妆品选择',
                mesg:'吴艳·北京大学第一医院皮肤科主任医师',
                time:'21',
                studying:'905',
                imgurl:require('../../../img/doc1.png')
            },{
                title:'便秘的秘密',
                mesg:'李恒爽·朝阳医院西区肛肠科主任',
                time:'31',
                studying:'777',
                imgurl:require('../../../img/doc2.png')
            },{
                title:'如何早发现慢性支气管炎',
                mesg:'文富强·四川大学华西医院大内科主任',
                time:'22',
                studying:'41',
                imgurl:require('../../../img/doc3.png')
            },{
                title:'男性健康：理想的性生活应该持续多长时间',
                mesg:'姜辉·北京大学第三医院泌尿科外科副主任',
                time:'21',
                studying:'1540',
                imgurl:require('../../../img/doc4.png')
            },{
                title:'高血压全知道',
                mesg:'孙杨玲·北京大学人民医院高血压研究所主任',
                time:'27',
                studying:'63',
                imgurl:require('../../../img/doc5.png')
            },{
                title:'月经调理必备知识',
                mesg:'牛建韶·北京中医药大学原副校长',
                time:'18',
                studying:'3522',
                imgurl:require('../../../img/doc6.png')
            }]
        }
    }
    render(){
        return(
            <div className="Course">
                <div className="CourseTop">
                    <ul>
                        <li>女性健康<i className="iconfont icon-zuihoudinggao"></i></li>
                        <li>宝宝健康<i className="iconfont icon-nanbaobao"></i></li>
                        <li>关爱父母<i className="iconfont icon-icon-test"></i></li>
                    </ul>
                </div>
                <div className="CourseBody">
                    <ul>
                        {
                            this.state.doctorList.map((item,idx)=>{
                                return (
                                    <li key={idx} className='CourseItem'>
                                        <div className='ListImg'>
                                            <img src={item.imgurl} alt=""/>
                                        </div>
                                        <div className='ListContent'>
                                            <h1>{item.title}</h1>
                                            <p className='ListMesg'>{item.mesg}</p>
                                            <p className='ListTime'><span>{item.time}课时</span><span>{item.studying}人正在学习</span></p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Course;
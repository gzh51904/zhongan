import React from "react";

class Video extends React.Component{    
    render(){
        return(
            <div className='mynewsImgBox'>
                <img src={require('../../../img/mynews_video.png')} alt=""/>
            </div>
        )
    }
}

export default Video;
import React from "react";

class Comment extends React.Component{
    render(){
        return(
            <div className='mynewsImgBox'>
                <img src={require("../../../img/mynews_comment.png")} alt=""/>
            </div>
        )
    }
}

export default Comment;
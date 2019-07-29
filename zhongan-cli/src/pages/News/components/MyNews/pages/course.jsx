import React from "react";

class Course extends React.Component{
    render(){
        return(
            <div className='mynewsImgBox'>
                <img src={require("../../../img/mynews_course.png")} alt=""/>
            </div>
        )
    }
}

export default Course;
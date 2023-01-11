import React, { useState } from "react";
import Course from "./Course";


const AllCourse = ()=>{
    const [courseOne,setCourse] = useState([
        {title:'Java',discription:'This is for testing purpouse'},
        {title:'Hibernate',discription:'This is for testing purpouse'},
        {title:'Spring',discription:'This is for testing purpouse'}
    ])
    return (
        <div className="text-center">
            <h1>All Course</h1>
            <p>list of Course are follow</p>
            {
                courseOne.length>0 ? courseOne.map((item)=>(<Course courseOne={item}/>)) :"no Course Available"
            }
        </div>
    )
}

export default AllCourse
import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios, { Axios } from "axios";
import base_url from '../api/bootapi'
import { toast } from "react-toastify";


const AllCourse = () => {

    useEffect(() => {
        document.title = 'All courcse';
        getAllCourseFromServer();
    }, [])

    // function to call server
    const getAllCourseFromServer = () => {
        axios.get(`${base_url}/books`).then(
            (Response) => {
                var data = Response.data;

                console.log(data);
                // for (const element of data) {
                //     for (const property in element) {
                //         if(property!='author')
                //         {
                //             console.log(`${property}: ${element.property}`);
                //         }
                //     }
                // }


                setCourse(Response.data)

                toast.success("Data has come");
            }, (error) => {
                // for error
                console.log(error);
                toast.error("there is not data ");
            }
        )
    }

    const [courseOne, setCourse] = useState([
        { title: 'Java', discription: 'This is for testing purpouse' },
        { title: 'Hibernate', discription: 'This is for testing purpouse' },
        { title: 'Spring', discription: 'This is for testing purpouse' }
    ])
    return (
        <div className="text-center">
            <h1>All Course</h1>
            <p>list of Course are follow</p>
            {
                courseOne.length > 0 ? courseOne.map((item) => (<Course key={item.id} courseOne={item} />)) : "no Course Available"
            }
        </div>
    )
}

export default AllCourse
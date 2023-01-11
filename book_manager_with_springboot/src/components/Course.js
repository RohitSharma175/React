import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardImg
} from 'reactstrap';
import axios, { Axios } from "axios";
import base_url from '../api/bootapi'
import { toast } from "react-toastify";



const Course = ({ courseOne }) => {

    // useEffect(() => {
    //     document.title = 'All courcse';
    //     deleteBookById();
    // }, [])

     // function to call server
     
     const deleteBookById = (id) => {
        axios.delete(`${base_url}/books/${id}`).then(
            (Response) => {
                var data = Response.data;
                console.log(data);
                toast.success("Book deleted successfully");
            }, (error) => {
                // for error
                console.log(error);
                toast.error("error occur ");
            }
        )
    }
    

    const updateBookById = (id) => {
        axios.put(`${base_url}/books/${id}`,{ book }).then(
            (Response) => {
                var data = Response.data;
                console.log(data);
                toast.success("Book deleted successfully");
            }, (error) => {
                // for error
                console.log(error);
                toast.error("error occur ");
            }
        )
    }
    return (
        <div className="container mt-3">
            <Card className="text-center"  inverse style={{
                backgroundColor: '#4dd2f7',
                borderColor: '#4dd2f7'
            }}>
                <CardBody>
                    <CardTitle style={{fontWeight: 'bold',color: 'black'}} className="font-weight-bold">{courseOne.title}</CardTitle>
                    <CardText> {courseOne.discription}</CardText>
                    
                    {/* <CardText>Author First Name : {courseOne.author.firstname}</CardText>
                    <CardText>Author Last Name : {courseOne.author.lastname}</CardText>
                    <CardText>Author Language : {courseOne.author.language}</CardText> */}
                    
                    <Container className="text-center">

                        <Button color="danger" onClick={()=>{deleteBookById(courseOne.id)}}>Delete</Button>
                        <span>  </span>
                        <Button color="warning" onClick={()=>{updateBookById(courseOne.id)}}>Update</Button>
                    </Container>
                </CardBody>
            </Card>

        </div>
    )
}

export default Course;
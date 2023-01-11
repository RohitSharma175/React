import React, { useState,useEffect } from "react";
import { Button, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const btnHandle = () => {
        toast("This is my first massage!", {
            position: 'bottom-center'
        });
    }

    useEffect(() => {
        document.title='Home page';
    },[])

    return (
        <div className="text-center" style={{ backgroundColor: '#eee' }}>
            
            <h1 className="display-3">Book Keeping</h1>
            <p>This is a web page where we can see all the Books and can get the details of that book</p>

            <Container>
                <Button color="primary" outline onClick={btnHandle}>First React button</Button>
            </Container>
        </div>
    )
}

export default Home;
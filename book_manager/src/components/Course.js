import React from "react";
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

const Course = ({ courseOne }) => {
    return (
        <div className="container mt-3">
            <Card className="text-center"  inverse style={{
                backgroundColor: '#4dd2f7',
                borderColor: '#4dd2f7'
            }}>
                <CardBody>
                    <CardTitle className="font-weight-bold">{courseOne.title}</CardTitle>

                    <CardText>{courseOne.discription}</CardText>
                    <Container className="text-center">

                        <Button color="danger">Delete</Button>
                        <span>  </span>
                        <Button color="warning">Update</Button>
                    </Container>
                </CardBody>
            </Card>

        </div>
    )
}

export default Course;
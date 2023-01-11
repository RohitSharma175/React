import React, { Fragment } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
} from 'reactstrap';

const AddCourse = () => {
    return (
        <Fragment>

            <h1 className="text-center my-3">Fill course detials</h1>
            <Form className="container">
                <FormGroup>
                    <Label for="userId">
                        Book Id
                    </Label>
                    <Input
                        id="userId"
                        name="userId"
                        placeholder="Enter Here"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="userId">
                        Book title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Enter Here"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="userId">
                        Book Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Enter Here"
                        type="textarea"
                        style={{height:200}}
                    />
                </FormGroup>
                <p>Author Details</p>
                <hr/>
                <FormGroup>
                    <Label for="userId">
                        First Name
                    </Label>
                    <Input
                        id="firstname"
                        name="firstname"
                        placeholder="Enter Here"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="userId">
                        Last Name
                    </Label>
                    <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Enter Here"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userId">
                       Language
                    </Label>
                    <Input
                        id="language"
                        name="language"
                        placeholder="Enter Here"
                        type="text"
                    />
                </FormGroup>

                <div className="text-center">

                <Button color="success">Add Course</Button>
                <span>  </span>
                <Button color="danger">Reset</Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default AddCourse
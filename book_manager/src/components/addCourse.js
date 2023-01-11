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
                        Couser Id
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
                        Couser title
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
                        Couser Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Enter Here"
                        type="textarea"
                        style={{height:200}}
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
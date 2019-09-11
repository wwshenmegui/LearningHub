import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../../templates/Header';

export default class CreateLearningPath extends Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <div className='container'>
                <h1 style={{ textAlign: "center" }}>Create a Learning Path</h1>
                <form className='col-md-8 col-md-offset-2'>

                    <Form.Group controlId="form-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group controlId="form-desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>

                    <Form.Group controlId="form-cat">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>


                    <Form.Group controlId="form-type">
                        <Row>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public"
                                    name="form-type"
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private"
                                    name="form-type"
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </form>
            </div>
            </React.Fragment>
        )
    }
}
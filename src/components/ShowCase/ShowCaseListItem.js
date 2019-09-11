import React, { Component } from 'react'
import { Form, Card } from "react-bootstrap";
import CategoryListItem from "../CategoriesButton/CategoryListItem";

class ShowCaseListItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            showcase:this.props.value
        }

    }


    render() {
        const showcase=this.state.showcase;

        const categories=showcase.categories.map((item,index)=>{
                return <CategoryListItem key={item?item:index} value={item}/>
        });
        return (

            <Card style={{width:'30%',margin:'10px'}}>
                <Card.Body>
                    <Card.Title>{showcase.title}</Card.Title>
                    <a href={showcase.url} className="card-link">{showcase.url}</a>
                    <Card.Text>{showcase.description}</Card.Text>
                    <Form.Label>{categories}</Form.Label>

                </Card.Body>
            </Card>
        );
    }
}

export default ShowCaseListItem
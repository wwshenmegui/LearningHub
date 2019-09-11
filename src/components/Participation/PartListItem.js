import React, {Component} from 'react'
import {Card, Form,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import CategoryListItem from "../CategoriesButton/CategoryListItem";

class PartListItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            part:this.props.value
        };

    }


    render() {
        const part=this.state.part;
        const data={data:part};
        const path={
            pathname:`/participations/participationId/${part.participationId}`,
            state:data
        };
        const categories=part.learningPath.categories.map((item,index)=>{
                return <CategoryListItem key={item?item:index} value={item}/>
        });

        return (
            <Card style={{width:'30%',margin:'10px'}}>
                <Card.Body>
                    <Card.Title>{part.learningPath.title}</Card.Title>
                    <Form.Label>{categories}</Form.Label>
                    <Card.Subtitle>Author:{part.learningPath.author}</Card.Subtitle>
                    <Card.Text>Created:{part.learningPath.createdOn}</Card.Text>
                    <Card.Text>Updated:{part.learningPath.updatedOn}</Card.Text>
                    <Card.Text>Participants:{part.learningPath.participants}</Card.Text>
                    <Card.Text>Progress:{part.progress}</Card.Text>
                    <Link to={path}>
                        <Button className="btn btn-success" >View</Button>
                    </Link>

                </Card.Body>
            </Card>
        );
    }
}

export default PartListItem;
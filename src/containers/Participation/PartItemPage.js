import React,{Component} from 'react'
import { Form } from 'react-bootstrap'
import CategoryListItem from "../../components/CategoriesButton/CategoryListItem";
import AssignmentListItem from "../../components/Assignment/AssignmentListItem";

class PartItemPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            part:this.props.location.state.data
        }
    }

    render() {
        const part=this.state.part;
        const categories=part.learningPath.categories.map((item,index)=>{
                return <CategoryListItem key={item?item:index} value={item}/>
        });
        const assignments=part.assignments.map((item,index)=>{
            return <AssignmentListItem />
        });
        return (
            <div className="container">
                <div><h1 align="center">{part.learningPath.title}</h1></div>
                <div>{categories}</div>
                <div>Author:{part.learningPath.author}</div>
                <div>Created:{part.learningPath.createdOn}</div>
                <div>Updated:{part.learningPath.updatedOn}</div>
                <div>Progress:{part.progress}</div>
                <div>{assignments}</div>
            </div>
        );
    }
}

export default PartItemPage;
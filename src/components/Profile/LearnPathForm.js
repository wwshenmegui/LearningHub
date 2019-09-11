import React, {Component} from 'react'
import {  Button } from 'react-bootstrap'

export default class LearnPathForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            learningPaths:this.props.learningPaths
        }
    }

    render()
    {
        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>learning paths</h2>
                <Button className="btn btn-default">show all</Button>
            </div>
        )
    }
}
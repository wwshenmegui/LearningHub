import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {  Button } from 'react-bootstrap'

import ShowCaseCardDeck from "./ShowCaseCardDeck";

export default class ShowCasesForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            userId:this.props.userId,
            showCases:this.props.showCases
        }
    }

    render()
    {
        let size=this.state.showCases.length;
        const list=this.state.showCases.slice(0,size>=3?3:size);
        const showcases=<ShowCaseCardDeck showcaseList={list} />;

        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>ShowCases</h2>

                <div>
                    {showcases}
                </div>
                <Link to={`/showcases/${this.state.userId}`}>
                    <Button>show all</Button>
                </Link>
            </div>
        )
    }
}
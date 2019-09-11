import React, {Component} from 'react'
import {  Button } from 'react-bootstrap'
import { withRouter,Link } from "react-router-dom";
import PartCardDeck from "./PartCardDeck";

class ParticipationsForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            participations:this.props.participations
        };

    }



    render()
    {
        let size=this.state.participations.length;
        const list=this.state.participations.slice(0,size>=3?3:size);
        const parts=<PartCardDeck part={list} />;


        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>participations</h2>
                {parts}
                <Link to={`/participations/userId/${this.props.userId}`}>
                    <Button>show all</Button>
                </Link>
            </div>
        )
    }
}

export default withRouter(ParticipationsForm)
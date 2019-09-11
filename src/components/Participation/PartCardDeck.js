import React, {Component} from 'react'
import PartListItem from "./PartListItem";
import {CardDeck} from "react-bootstrap";

export default class PartCardDeck extends Component{
    constructor(props) {
        super(props);
        this.state={
            part:this.props.part
        }
    }

    render() {
        const partList=this.state.part.map((item,index)=>{
            return <PartListItem key={item?item.toString():index} value={item}/>
        });
        return (
            <CardDeck>
                {partList}
            </CardDeck>
        );
    }
}
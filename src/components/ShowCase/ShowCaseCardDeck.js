import React,{ Component } from 'react'
import { CardDeck } from "react-bootstrap";
import ShowCaseListItem from "./ShowCaseListItem";

export default class ShowCaseCardDeck extends Component{
    constructor(props) {
        super(props);
        this.state={
            showcaseList:this.props.showcaseList
        }
    }

    render() {
        const showcaseList=this.state.showcaseList.map((item,index)=>{
            return <ShowCaseListItem key={item?item.toString():index} value={item}/>
        });
        return (
            <CardDeck>
                {showcaseList}
            </CardDeck>
        );
    }
}
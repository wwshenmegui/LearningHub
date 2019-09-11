import React,{Component} from 'react'
import PartCardDeck from "../../components/Participation/PartCardDeck";

export default class PartListPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            part:[
            {
                learningPath: {
                    title: "A",
                    author: "hhh",
                    description: "oraoraoraora",
                    categories: ["Java", "C++"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            },
            {
                learningPath:{
                    title: "B",
                    author: "h",
                    description: "mudamudamudamuda",
                    categories: ["Go", "C++"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            },
            {
                learningPath: {
                    title: "C",
                    author: "hhhh",
                    description: "oraoraoraora",
                    categories: ["Java", "Python"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            }
        ]
        }
    }

    render() {
        const partList=<PartCardDeck part={this.state.part} />
        return (
            <div className="container">
                <h1 align="center">Participations</h1>
                <div>
                    {partList}
                </div>
            </div>
        );
    }

}
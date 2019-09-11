import React, { Component } from 'react'

import '../../assets/css/ShowCase.css'
import ShowCaseCardDeck from "../../components/ShowCase/ShowCaseCardDeck";

class ShowCaseListPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            showCases:[{
                showCaseId:1,
                userId:1,
                url:"www.google.com",
                title:"Project A",
                description: "Null Pointer",
                categories:["Java","SpringBoot","MySQL"],
                comments:[
                    {
                        username:"A",
                        content:"Good"
                    },
                    {
                        username:"B",
                        content:"Bad"
                    }
                ]
            },
            {
                showCaseId:2,
                userId:1,
                url:"github.com",
                title:"Project B",
                description:"Null",
                categories:["Python","MongoDB"],
                comments:[]
            }]
        }
    }

    render() {
        const showCaseList=<ShowCaseCardDeck showcaseList={this.state.showCases}/>
        const userId=this.props.match.params.userId;
        return(
            <div className="container">
                <div><h1 align="center">ShowCaseList</h1></div>
                <div>
                { showCaseList }
                </div>
            </div>
            )
    }

}

export default ShowCaseListPage;
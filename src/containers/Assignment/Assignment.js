import React, { Component } from 'react';
import Header from '../../templates/Header';
import AssignmentListItem from '../../components/Assignment/AssignmentListItem'

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: [
                {
                    name: "First",
                    url: "first",
                    instruction: "String one"
                },
                {
                    name: "Second",
                    url: "second",
                    instruction: "String two"
                }
            ],
            name: '',
            url: '',
            instruction: ''

        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const assignment = {
            name: this.state.name,
            url: this.state.url,
            instruction: this.state.instruction
        }

        this.setState({ assignments: [...this.state.assignments, assignment] });

        this.setState({ name: '', url: '', instruction: '' })
    }

    onChange = (type, event) => {
        this.setState({ [type]: event.target.value })
    }

    render() {

        const assignmentList = this.state.assignments.map((assignment) => {
            return <AssignmentListItem name={assignment.name} url={assignment.url} instruction={assignment.instruction} />
        })

        return (
            <div>
                <Header />
                <h1>Assignments</h1>
                {assignmentList}
                <form onSubmit={this.onSubmit}>
                    <h3>Add Assignment</h3>
                    <div className="form-group col-md-3" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('name', event)} />
                    </div>
                    <div className="form-group col-md-3" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">URL</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('url', event)} />
                    </div>
                    <div className="form-group col-md-3" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">Instruction</label>
                        <textarea type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('instruction', event)} />
                    </div >
                    <div className="form-group col-md-3" style={{clear:"both"}}>
                        <input style={{clear:"both"}} type='submit' value='Add' />
                    </div >
                    
                </form>
            </div>
        )
    }
}

export default Assignment;
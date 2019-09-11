import React, { Component } from 'react';
import Header from '../../templates/Header';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPencilAlt, faBrain, faTrash, faLink } from '@fortawesome/free-solid-svg-icons'
import MyModal from '../Modal/Modal'

class AssignmentListItem extends Component {

  state = { modalShow: false };

  showModal = () => {
    this.setState({ modalShow: true });
  }

  hideModal = () => {
    this.setState({ modalShow: false });
  }

  render() {

    return (
      <React.Fragment>
        {/* <ul>
          <li>{this.props.name}</li>
          <li>{this.props.url}</li>
          <li>{this.props.instruction}</li>
        </ul> */}

        {<Card style={{ width: '30%', margin: '5px' }}>
          <Card.Body>
            <Card.Title>{this.props.name}
              <span style={{ position: "absolute", right: "0", margin: '10px' }}>
                <a href='https://www.google.com' activeClassName="active"><FontAwesomeIcon icon={faLink} style={{ marginRight: "15px" }} /></a>
                <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: "20px", cursor: 'pointer' }} onClick={this.showModal} />
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: "15px" }} />
              </span>
            </Card.Title>
            <Card.Text>
              {this.props.instruction}
            </Card.Text>
          </Card.Body>
        </Card>}
        <MyModal show={this.state.modalShow} handleClose={this.hideModal} onHide={this.handleClose}>
          <p>MyModal</p>
          <p>Data</p>
        </MyModal>
        {/* <button className='btn btn-default form-control col-md-1' type="button" onClick={this.showModal}>
          Open
        </button> */}

      </React.Fragment>
    )
  }
}

export default AssignmentListItem;
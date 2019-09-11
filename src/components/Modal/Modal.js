import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import '../../assets/css/modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class MyModal extends Component {

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <React.Fragment>
                <div className={showHideClassName}>
                    
                    <section className="modal-main container">
                    <button className='rounded-btn' style={{position:'absolute', right:'15px'}} onClick={this.props.handleClose}><FontAwesomeIcon icon={faTimes}  /></button>
                        {this.props.children}
                        
                    </section>
                </div>
            

            </React.Fragment>
        );
    };
}


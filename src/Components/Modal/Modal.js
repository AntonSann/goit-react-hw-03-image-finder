import React, {Component} from 'react';
import {createPortal} from 'react-dom';
import Style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown= event =>{
        if(event.code === 'Escape'){
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
if(event.currentTarget === event.target){
    this.props.onClose();
}
    }

    render (){
        return createPortal(
            <div className={Style.Overlay} onClick={this.handleBackdropClick}>
                <div className={Style.Modal}>{this.props.children}</div>
            </div>, 
            modalRoot
        );
    }
}
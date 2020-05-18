import React, { Component } from 'react';
import './style.css';

class HeaderForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title
        }
    }

    render(){
        return(
            <header>
                <h3>{this.state.title}</h3>
            </header>
        );
    }
}

export default HeaderForm;
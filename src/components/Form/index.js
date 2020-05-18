import React, { Component } from 'react';

import './style.css';

import HeaderForm from '../HeaderForm';
import InputForm from '../InputForm';



class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <HeaderForm
                    title='Lista de tarefas' />
                <InputForm
                    titleLabel='Adicione aqui sua tarefa' 
                    placeholder='Adicione uma nova tarefa' />
                    
            </form>
        );
    }
}

export default Form;
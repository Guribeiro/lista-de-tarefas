import React, { Component } from 'react';
import TodoList from '../TodoList';

import './style.css';

import { RiAddCircleLine } from 'react-icons/ri';


class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleLabel: props.titleLabel,
            placeholder: props.placeholder,
            tarefa: '',
            tarefas: []
        }

        this.handleTask = this.handleTask.bind(this);
        this.deleteTarefa = this.deleteTarefa.bind(this);
    }

    handleTask(event) {
        event.preventDefault();
        const tarefa = this.state.tarefa

        if(this.state.tarefa === ''){
            alert('Insira uma tarefa válida')

        }else{

            const newTarefa = {
                text: tarefa,
                key: Date.now()
            }
            
            this.setState({tarefas: [...this.state.tarefas, newTarefa]})
            
            const {key} = newTarefa

            const str_key = key.toString();

            localStorage.setItem(`@todo-list/tarefa/${str_key}`, JSON.stringify(newTarefa));

            const retrievedObject  = localStorage.getItem('@todo-list/tarefa')

            this.setState({ tarefa: '' })
        }


    }


    deleteTarefa(key){
        const filtro = this.state.tarefas.filter((tarefa) =>{
            return (tarefa.key !== key);
        })

        this.setState({tarefas: filtro})
    }

    render() {
        return (
            <main>
                <div className='input-container'>
                    <input type="text" name="" id="inputTodo" placeholder={this.state.placeholder}
                        value={this.state.tarefa}
                        onChange={(event) => this.setState({ tarefa: event.target.value })}
                        
                    />

                    <a href='/' onClick={this.handleTask}>
                        <RiAddCircleLine />
                    </a>
                </div>
                <div>
                    <TodoList lista={this.state.tarefas} delete={this.deleteTarefa}/>
                </div>
            </main>
        );
    }
}

export default InputForm;
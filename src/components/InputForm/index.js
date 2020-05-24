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
            tarefas: [],
        }

        this.handleNewTarefa = this.handleNewTarefa.bind(this);
        this.handleTask = this.handleTask.bind(this);
        this.deleteTarefa = this.deleteTarefa.bind(this);
        
        //this.createList = this.createList.bind(this);


    }


    handleNewTarefa(tarefa) {

        const newTarefa = {
            text: tarefa,
            key: Date.now().toString()
        }

        return newTarefa;
    }


    handleTask(event) {
        event.preventDefault();

        const tarefa = this.state.tarefa

        if (this.state.tarefa === '') {
            alert('Campo vazio. \nTente novamente')

        } else {

            const newTarefa = this.handleNewTarefa(tarefa)

            const { key } = newTarefa

            localStorage.setItem(`@todo-list/tarefa/${key}`, JSON.stringify(newTarefa));

            const retrievedObject = JSON.parse(localStorage.getItem(`@todo-list/tarefa/${key}`))

            this.setState({ tarefas: [...this.state.tarefas, retrievedObject] })
            
            this.setState({ tarefa: '' })


        }
    }

    /*
    createList() {

        let itemsFromStorage = []

        const keyList = (Object.keys(localStorage))

        for (let index = 0; index < keyList.length; index++) {
            itemsFromStorage.push(localStorage.getItem(keyList[index]))

        }

        const newListMap = itemsFromStorage.map((tarefaObj) => {
            return JSON.parse(tarefaObj)

        })

        return newListMap;
    }
    */
    deleteTarefa(key) {

        const filtro = this.state.tarefas.filter((tarefa) => {
            return (tarefa.key !== key);
        })

        this.setState({ tarefas: filtro })

        localStorage.removeItem(`@todo-list/tarefa/${key}`)

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
                    <TodoList lista={this.state.tarefas} delete={this.deleteTarefa} createList={this.createList} />
                </div>
            </main>
        );
    }
}

export default InputForm;
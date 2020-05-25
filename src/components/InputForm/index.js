import React, { Component } from 'react';
import TodoList from '../TodoList';

import Utils from '../../utils';

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


        this.deleteTarefa = this.deleteTarefa.bind(this);
        this.handleTask = this.handleTask.bind(this);
        this.AllStorage = this.AllStorage.bind(this);

    }

    handleTask(event) {
        event.preventDefault();

        const tarefa = this.state.tarefa

        if (tarefa === '') {
            alert('Campo vazio. \nTente novamente')

        } else {

            const key = Utils.keyGenerator();

            localStorage.setItem(`@todo-list/task/${key}`, tarefa)

            const itemsFromStorage = this.AllStorage();

            this.setState({ tarefas: itemsFromStorage });

            this.setState({ tarefa: '' })

        }
    }

    componentDidMount() {
        const itemsFromStorage = this.AllStorage();

        this.setState({ tarefas: itemsFromStorage });
    }

    deleteTarefa(key) {
        localStorage.removeItem(key);

        const itemsFromStorage = this.AllStorage();

        this.setState({ tarefas: itemsFromStorage })
    }


    AllStorage() {
        const values = []

        const keys = Object.keys(localStorage)

        for (let index = 0; index < keys.length; index++) {
            const element = keys[index];
            values.push(element);

        }

        const ListItems = values.map((item) => {
            return Utils.mountTask(item, localStorage.getItem(item));
        })

        return ListItems;
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
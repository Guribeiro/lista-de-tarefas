import React, { Component } from 'react';

import { MdRemoveCircleOutline } from 'react-icons/md';

import './style.css';


class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete(key) {
        this.props.delete(key);
    }

    render() {
        return (
            <div className='list-container'>
                <ol>
                    {
                        this.props.lista.map((tarefa) => {
                            return (
                                <li key={tarefa.key} onClick={() => this.handleDelete(tarefa.key)} >{tarefa.text}
                                    <a href="/" onClick={(event) =>{event.preventDefault()}}>
                                        <MdRemoveCircleOutline />
                                    </a>
                                </li>

                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default TodoList;
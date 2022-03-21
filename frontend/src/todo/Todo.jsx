import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const initialState = {
    description: '',
    list: []
}

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(({data}) => this.setState({description, list: data}))
    }

    handleClear() {
        this.refresh()
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description

        axios.post(URL, {description}).then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(({data}) => this.refresh(this.state.description))
    }
    
    handleChange(e) {
        this.setState({description: e.target.value})
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(({data}) => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(({data}) => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}
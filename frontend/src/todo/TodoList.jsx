import React from 'react'

import './styles.css'
import IconButton from '../template/iconButton/IconButton'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        style='success'
                        icon='check' 
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}
                    />
                    <IconButton 
                        style='warning'
                        icon='undo' 
                        onClick={() => props.handleMarkAsPending(todo)}
                        hide={!todo.done}
                    />
                    <IconButton 
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <caption>Lista de tarefas</caption>
            <colgroup>
                <col />
                <col style={{width: "108px"}}/>
            </colgroup>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList
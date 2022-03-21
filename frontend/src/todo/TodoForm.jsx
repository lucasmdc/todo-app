import React from 'react'
import Grid from '../template/grid/Grid'
import IconButton from '../template/iconButton/IconButton'

const TodoForm = props => {
    const keyHandler = e => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm clearfix">
            <Grid cols="12 9 10">
                <input 
                    type="text"
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange} 
                    onKeyUp={keyHandler}
                />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" hide={false}
                    onClick={props.handleAdd} 
                />
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch} 
                />
                <IconButton style="default" icon="close"
                    onClick={props.handleClear} 
                />
            </Grid>
        </div>
    )
}

export default TodoForm
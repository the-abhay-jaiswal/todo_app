import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import './Todo.css'
import db from './firebase'

export const Todo = (props) => {
    return (
        <>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary='Dummy deadline ⏰' />
                    <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌ Delete</Button>
                </ListItem>
            </List>
        </>
    )
}
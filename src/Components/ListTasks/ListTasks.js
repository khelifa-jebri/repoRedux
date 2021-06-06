import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../Task/Task.jsx'
import { Button } from "react-bootstrap";
import { is_Done, isNotDone, refresh } from "../../redux/Actions/actionTodo";
import { useDispatch } from "react-redux";

function ListTasks() {

    const tasks = useSelector(state => state.tasksList)
    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(is_Done({})
        )
    }

    const handleNotDone = () => {
        dispatch(isNotDone({})
        )
    }

    const handleRefresh = () => {
        dispatch(refresh({})
        )
    }

    return (
        <div>
            <div>
                <Button style={{ margin: "1%" }} variant="outline-success" onClick={() => handleDone()}>Finished Tasks</Button>
                <Button style={{ margin: "1%" }} onClick={() => handleRefresh()}>Reset</Button>
                <Button style={{ margin: "1%" }} variant="outline-danger" onClick={() => handleNotDone()}> Not Finished Tasks</Button>
            </div>
            {tasks.map((task, index) =>
                <Task key={index} todoTask={task} />)}
        </div>
    )
}

export default ListTasks

import React, { useEffect } from 'react'
import AddTodo from './AddTodo/AddTodo'
import ShowTodo from './ShowTodo/ShowTodo'
import { callApiJob } from '../Redux/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function TodoList() {
    const listJobs = useSelector(data => data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(callApiJob())
    }, [])
    return (
        <div className="container d-flex flex-column align-items-center">
            <AddTodo />
            <ShowTodo listJobs={listJobs} />
        </div>
    )
}

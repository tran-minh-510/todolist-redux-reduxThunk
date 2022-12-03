import { SET_JOB, ADD_JOB, IS_CHECKED, DELETE_JOB, EDIT_JOB } from "./actionTypes"

function fetchSecretSauce(options = null, id = '') {
    return fetch(`http://localhost:3004/jobs/${id}`, options)
}

const setJobs = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJobs = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const editJob = payload => {
    return {
        type: EDIT_JOB,
        payload
    }
}

const setCheckedJob = payload => {
    return {
        type: IS_CHECKED,
        payload
    }
}

const callApiJob = () => async (dispatch) => {
    const res = await fetchSecretSauce()
    const data = await res.json()
    await dispatch(setJobs(data))
}

const callApiAddJob = (job) => async (dispatch) => {
    const res = await fetchSecretSauce({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    const data = await res.json()
    await dispatch(addJobs(data))
}

const handleCheckedJob = (id, checked) => async (dispatch) => {
    await fetchSecretSauce({
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isChecked: !checked })
    }, id)
    await dispatch(setCheckedJob({ id, checked }))
}

const callDeleteJob = (id) => async (dispatch) => {
    await fetchSecretSauce({
        method: 'DELETE'
    }, id)
    await dispatch(deleteJob(id))
}

const callEditJob = (id, content) => async (dispatch) => {
    await fetchSecretSauce({
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    }, id)
    await dispatch(editJob({ id, content }))
}

export { callApiAddJob, callApiJob, handleCheckedJob, callDeleteJob, callEditJob }
import { SET_JOB, ADD_JOB, IS_CHECKED, DELETE_JOB, EDIT_JOB } from "./actionTypes";

const initState = []

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_JOB:
            return [...action.payload]
        case ADD_JOB:
            return [...state, action.payload]
        case IS_CHECKED:
            const cloneState = [...state]
            const findJob = cloneState.find(({ id }) => id === action.payload.id)
            findJob.isChecked = !action.payload.checked
            return cloneState
        case DELETE_JOB:
            const afterDeleted = [...state].filter(({ id }) => id !== action.payload)
            return afterDeleted
        case EDIT_JOB:
            console.log('123')
            const cloneStatee = [...state]
            const findJobb = cloneStatee.find(({ id }) => id === action.payload.id)
            if (findJobb) findJobb.content = action.payload.content
            return cloneStatee
        default:
            return state;
    }
}

export default reducer
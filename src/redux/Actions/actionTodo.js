import { ADD, DELETE, COMPLETE, EDIT, IS_DONE, IS_NOT_DONE, REFRESH } from '../Constants/actions-Types'


export const addTask = (payload) => {
    return {
        type: ADD, payload
    }
}
export const deleteTask = (payload) => {
    return {
        type: DELETE, payload
    }
}
export const editTask = (payload) => {
    return {
        type: EDIT, payload
    }
}
export const completeTask = (payload) => {
    return {
        type: COMPLETE, payload
    }
}

export const is_Done = (payload) => {
    return {
        type: IS_DONE, payload
    }
}

export const isNotDone = (payload) => {
    return {
        type: IS_NOT_DONE, payload
    }
}

export const refresh = (payload) => {
    return {
        type: REFRESH, payload
    }
}
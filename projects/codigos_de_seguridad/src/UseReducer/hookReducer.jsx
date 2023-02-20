import React, { useEffect, useReducer } from 'react'
import { key, reducer, initialState } from './reducer'

export function useReducerComponent() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleWriteonChange = (e) => {
        e.preventDefault()
        dispatch({ type: 'WRITE', payload: e.target.value })
    }

    const checkInput = () => {
        if (state.inputR !== key) {
            dispatch({ type: 'ERROR' })
        } else {
            dispatch({ type: 'CHECK' })
        }
    }
    const checkKey = () => {
        dispatch({ type: 'CONFIRM' })
    }

    const handleReturn = () => {
        dispatch({ type: 'DEFAULT' })
    }

    useEffect(() => {
        setTimeout(() => {

            if (state.loading) {
                dispatch({ type: 'LOADING' })
            }
        }, 1000)
    }, [state.loading])

    return {
        state,
        initialState,
        handleWriteonChange,
        checkInput,
        checkKey,
        handleReturn
    }
}

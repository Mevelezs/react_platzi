import React, { useEffect, useState } from 'react'

const key = 'paradigma'

export const useComponentUseState = () => {
  const [state, setState] = useState({
    input: '',
    error: false,
    loading: false,
    deleted: false,
    confirm: false
  })

  const handleonChange = (e) => {
    e.preventDefault()
    setState(() => (
      {
        ...state,
        input: e.target.value,
        error: false
      }
    ))
  }

  const handleonClick = () => {
    if (state.input !== key) {
      setState(
        {
          ...state,
          inpunt: '',
          error: true,
          loading: true
        }
      )
    } else {

      setState(
        {
          ...state,
          inpunt: '',
          loading: true,
          deleted: true
        })
    }
  }
  const handleDelete = () => {
    setState({
      ...state,
      deleted:false,
      confirm: true
    })
  }

  const handleRestore = () => {
    setState({
      input: '',
      error: false,
      loading: false,
      deleted: false,
      confirm:false
    })
    
  }
  useEffect(() => {
    if (state.loading ) {
      setTimeout(() => {
        setState(() => {
          return {
            ...state,
            loading: false,
          }
        })
      }, 1000)
    }
  }, [state.loading])

  return {
    state,
    setState,
    handleonChange,
    handleonClick,
    handleRestore,
    handleDelete
  }

}

export function UseState() {
  const {
    state,
    handleonChange,
    handleonClick,
    handleDelete,
    handleRestore
  } = useComponentUseState()
  
  const { input, error, loading, deleted, confirm } = state

  if ((!deleted && !confirm) || loading){
    return (
    <>
      <h1> Component Eliminator With UseState </h1>

      <p>Please, Write the security code</p>

      {
        loading && (<p>Loading...</p>)
      }
      {
        (!loading && error) && (<p>Error: the code is wrong</p>)
      }

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        
        <input type="text" id='input' name='input' value={input} onChange = {handleonChange} placeholder='Write the key'/>
        
        <button type='submit' onClick={handleonClick}> Check </button>
      </div>
    </>
  )}
  else if (!loading && deleted) {
    return (
      <>
        <h1> Delete UseState</h1>
        <p>Are you sure to delete UseState?</p>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <button onClick={handleDelete}> Yes, Delete</button>
          <button onClick={handleRestore}>No, Go Back</button>
        </div>
      </>
    )
  } else if (!deleted && confirm) {
    return (
      <>
        <h1> UseState already deleted</h1>
        <button onClick={handleRestore} style={{ marginBottom: '20px' }}> Return to UseState </button>
      </>
    )
  }
}


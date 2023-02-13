import React, { useEffect, useState } from 'react'

const key = 'paradigma'

export function UseState() {
  const [state, setState] = useState({
    input: '',
    error: false
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
      setState(() => (
        {
          ...state,
          inpunt: '',
          error: true
        }
      ))
      
    } else {
      
    }
  }
  
  return (
    <>
      <h1> Component Eliminator With UseState </h1>

      <p>Please, Write the security code</p>

      {
        state.error && (<p>Error: the code is wrong</p>)
      }
     

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        
        <input type="text" id='input' name='input' value={state.input} onChange = {handleonChange} />
        
        <button type='submit' onClick={handleonClick}> Check </button>
      </div>
    </>
  )
}


import React from 'react'

export function Delete({ checkKey, handleReturn  }) {
  return (
      <>
          <h1>Delete UseReducer</h1>
          <p>Are you sure to delete usereducer?</p>
          <div style={{ display:'flex', marginBottom:'20px' }}>   
              <button onClick={() => { checkKey() }}>Yes, Delete</button>
        <button onClick={() => { handleReturn ()}}>No, Return</button>
          </div>
      </>
  )
}

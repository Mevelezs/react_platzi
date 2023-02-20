import React from 'react'
import './App.css'
import { UseState } from '../src/UseState/UseState'
import { UseReducer } from './UseReducer/UseReducer'

export default function App() {
  return (
    <React.Fragment>
      <div className='section' >
        <div className='useState'>  
            <UseState />
        </div>
        <div className='useReducer'>
          <UseReducer />
        </div>
      </div>
    </React.Fragment>
  )
}


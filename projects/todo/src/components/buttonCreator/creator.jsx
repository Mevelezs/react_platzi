import React from 'react'
import './creator.css'
import { useContext } from 'react'
import { TodoContex } from '../useContext/useContext'

export function Creator() {
    const { handleModal } = useContext(TodoContex)
  return (
    <button className='creatorButton' onClick={handleModal}>+</button>
  )
}


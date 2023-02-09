import React from 'react'
import './creator.css'

export function Creator({ handleModal }) {
  return (
    <button className='creatorButton' onClick={handleModal}>+</button>
  )
}


import React from 'react'
import './search'
// import { useContext } from 'react'
// import { TodoContex } from '../useContext/useContext'

export function Search({ search, handleonSearch }) {
  // const { search, handleonSearch } = useContext(TodoContex)
  return (
    <>
      <input
        type='text' id='search' className='search' placeholder='find task'
        value={search}
        onChange={handleonSearch}
      />
      <label htmlFor='search'>Search Task</label>
    </>
  )
}

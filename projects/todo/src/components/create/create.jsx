import './create.css'
// import { useContext } from 'react'
// import { TodoContex } from '../useContext/useContext'

export function Create({ onSubmit, create, handleCreate, handleModal }) {
  // const { onSubmit, create, handleCreate, handleModal} = useContext(TodoContex)
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='task'>Tasks</label>
        <textarea type='input' id='task' value={create} placeholder='create task'
          onChange={handleCreate} />
        <button type='button' onClick={handleModal}> Close </button>
        <button type='submit' onClick={onSubmit}> Add </button>
      </form>
    </>
  )
}

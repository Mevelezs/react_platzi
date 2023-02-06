// import { useContext } from "react"
// import {TodoContex } from "../useContext/useContext"

export function Items({ initialTasks, handleComplete, handleDelete }) {
  //const { initialTasks, handleComplete, handleDelete } = useContext(TodoContex)
  return (
    <>
      {
      initialTasks && initialTasks.map(e => (
        <section className='section' key={e.text}>
          <ul>
            <li className='todoItem'>
              <span>
                <button style={e.completed ? { backgroundColor: 'blue' } : { backgroundColor: 'red' }} type='button' onClick={() => handleComplete(e.text)}>√</button>
              </span>
              <p>{e.text}</p>
              <button type='button' onClick={() => { handleDelete(e.text) }}>
                <span className='Icon Icon-delete'>X</span>
              </button>
            </li>
          </ul>
        </section>
      ))
      }
    </>
  )
}

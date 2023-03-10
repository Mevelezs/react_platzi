import './counter.css'
// import { useContext } from 'react'
// import { TodoContex } from '../useContext/useContext'


export function Counter({ count, initialTasks }) {
  // const { count, initialTasks } = useContext(TodoContex)
  return (
    <>
      <section>
        <h2 className='titleTasks'>Your tasks</h2>
        <h4 className='counter'>completed {count} of {initialTasks && initialTasks.length} tasks</h4>
      </section>
    </>
  )
}


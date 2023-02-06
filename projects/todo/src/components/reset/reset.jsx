// import { useContext } from 'react'
// import { TodoContex } from '../useContext/useContext'


export function Reset({ handleReset }) {
  // const {handleReset} = useContext(TodoContex)
  return (
    <button onClick={handleReset}>Reset All</button>
  )
}


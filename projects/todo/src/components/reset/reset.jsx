import { useContext } from 'react'
import { TodoContex } from '../useContext/useContext'


export function Reset() {

    const {handleReset} = useContext(TodoContex)
  return (
    <button onClick={handleReset}>Reset All</button>
  )
}


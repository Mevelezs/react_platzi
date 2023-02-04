import React from 'react'
import './list.css'

export function List ({ children, handleonSearch }) {
  return (
    <section className='section'>
      <ul>
        <li className='todoItem'>
          <span>
            √
          </span>
          <p>{children}</p>
          <span className='Icon Icon-delete'>X</span>
        </li>
      </ul>
    </section>
  )
}

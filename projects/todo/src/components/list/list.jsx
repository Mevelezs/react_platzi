import React from 'react'
import './list.css'

export function List ({ children, completed }) {
  return (
    <section className='section'>
      <ul>
        <li className='todoItem'>
          <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
            √
          </span>
          <p>{children}</p>
          <span className='Icon Icon-delete'>X</span>
        </li>
      </ul>
    </section>
  )
}

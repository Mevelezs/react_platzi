import React from 'react'
import './list.css'

export function List ({ onLoading, loading, children }) {
  return (
    <section className='section'>
      {loading ? onLoading() :
      <ul>
        {children} 
      </ul>
      }
    </section>
  )
}


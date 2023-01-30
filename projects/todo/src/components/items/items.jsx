import React from 'react'
import { List } from '../list/list'

const todos = [
  { text: 'Cocinar', completed: true },
  { text: 'Lavar ', completed: false },
  { text: 'Trotar', completed: false },
  { text: 'Comer', completed: false }
]

export function Items () {
  return (
    <>
      {
        todos.map(e => (
          <List key={e.text}>
            {e.text}
          </List>
        ))
      }
    </>
  )
}

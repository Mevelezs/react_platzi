import React from 'react'
import { Counter } from '../counter/counter'
import { Create } from '../create/create'
import { Items } from '../items/items'
import { Search } from '../search/search'

export function AppUI () {
  return (
    <>
      <Counter />
      <Create />
      <Search />
      <Items />
    </>
  )
}

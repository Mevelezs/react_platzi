import React, { Children } from 'react'

function TodoHeader({children}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export {TodoHeader}

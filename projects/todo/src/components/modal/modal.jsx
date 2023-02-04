import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

export function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modalBackgound">
            {children} {/* // hijos */}
      </div>,
      document.getElementById('modal') // nodo de html
  )
}

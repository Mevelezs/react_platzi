import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/app/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// const App = ({ saludo, nombre }) => (
//   <h1>
//     {`¡ ${saludo}, ${nombre} !`}
//   </h1>
// );

// const HOC = (Wrapped) => {
//   return (tiempo) => {
//     return (props) => (
//       <>
//         <Wrapped {...props} tiempo={tiempo} />
//         {tiempo}
//         <h2>HOC</h2>
//       </>
//     )
//   }
// }

// const NewHOC = HOC(App)('Es de mañana')

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <NewHOC
//       saludo='Hola'
//       nombre='Mauricio'
//    />
//   </React.StrictMode>
// )


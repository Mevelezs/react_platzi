import { AppUI } from '../appUi/appUI'
import { TodoProvider} from '../useContext/useContext'

function App () {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App

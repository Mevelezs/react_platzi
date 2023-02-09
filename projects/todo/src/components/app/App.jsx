
import { Counter } from '../counter/counter'
import { List } from '../list/list'
import { Items } from '../items/items'
import { Search } from '../search/search'
import { Reset } from '../reset/reset'
import { Creator } from '../buttonCreator/creator'
import { Modal } from '../modal/modal'
import { Create } from '../create/create'
import { TodoHeader } from '../header/TodoHeader'
import { TodoLoading } from '../Loading/TodoLoading'

import { useTasks } from '../useContext/useContext'

function App() {
  const {
    create,
    count,
    search,
    initialTasks,
    handleComplete,
    handleCreate,
    handleDelete,
    handleReset,
    handleonSearch,
    onSubmit,
    openModal,
    handleModal,
    loading,
  } = useTasks()
  return (
    <>
      <TodoHeader>
        <Counter
          count={count}
          initialTasks={initialTasks }
        />
        <Search
          search={search}
          handleonSearch={handleonSearch} 
        />  
      </TodoHeader>

      <Reset handleReset={handleReset} />

      <List
        loading={loading}
        onLoading = {() => <TodoLoading/>}
      >
        <Items
          initialTasks={initialTasks}
          handleComplete={handleComplete}
          handleDelete={handleDelete} 
        />
      </List>

      <Creator handleModal={handleModal} />
      
      { openModal && ( 
         <Modal> 
          <Create
            onSubmit={onSubmit}
            create={create}
            handleCreate={handleCreate}
            handleModal={handleModal} />
         </Modal>
       )
      }
    </>
  )
}

export default App
 
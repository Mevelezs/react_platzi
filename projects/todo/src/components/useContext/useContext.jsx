import { useState, useEffect } from 'react'

function useTasks() {
 
  const getLocalStorage = localStorage.getItem('APP_V1')
  let initialTasks;

  if (!getLocalStorage) {
    localStorage.setItem('APP_V1', JSON.stringify([]))
    initialTasks = initialTasks
  } else {
    initialTasks = JSON.parse(getLocalStorage)
  }
  const [todos, setTodos] = useState(initialTasks)
  const [search, setSearch] = useState('')
  const [create, setCreate] = useState('')
  const [count, setCount] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(true)



  if (search.length < 1) {
    initialTasks = todos
  } else {
    initialTasks = todos.filter(elem => {
      const elementText = elem.text.toLocaleLowerCase()
      const searchValue = search.toLocaleLowerCase()
      return elementText.includes(searchValue)
    })
  }

  const saveLocalStorage = (tasks) => {
    localStorage.setItem('APP_V1', JSON.stringify(tasks))
    setTodos(tasks)
  }

  const handleonSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleDelete = (e) => {
    const data = [...todos]
    const deleteOne = data.filter(elem => {
      return (elem.text !== e)
    })
    saveLocalStorage(deleteOne)
  }

  const handleCreate = (e) => {
    e.preventDefault()
    setCreate(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = { text: create, completed: false }
    const data2 = [...todos]
    data2.push(data)
    saveLocalStorage(data2)
    setCreate('')
  }

  const handleComplete = (item) => {
    const find = [...todos]
    const index = find.findIndex(e => e.text === item)
    find[index].completed = !find[index].completed
    saveLocalStorage(find)
  }

  const handleCount = () => {
    const counter = [...todos]
    const result = counter.filter(e => e.completed === true)
    setCount(result.length)
  }

  const handleReset = () => {
    setTodos([])
    setCount('')
    setCreate('')
    setSearch('')
    localStorage.clear()
  }
  const handleModal = () => {
    setOpenModal(!openModal)
    setCreate('')
  }
  
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  useEffect(() => {
    handleLoading()
    handleCount()
  }, [todos])

  return (
    {
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
      loading
    }
    )
}

export { useTasks }


const key = 'paradigma'

const initialState = {
  inputR: '',
  error: false,
  loading: false,
  deleteReducer: false,
  confirm: false
};


const reducerObjects = (state, payload) => ({
  'WRITE': {
    ...state,
    inputR: payload,
    error: false,
  },
  'ERROR': {
    ...state,
    error: true,
    loading: true,
  },
  'CHECK': {
    ...state,
    erro: false,
    loading: true,
    deleteReducer: true

  },
  'LOADING': {
    ...state,
    loading: false
  },
  'DELETE': {
    ...state,
    deleteReducer: true,
  },
  'CONFIRM': {
    ...state,
    deleteReducer: false,
    confirm: true
  },
  'DEFAULT': {
    inputR: '',
    error: false,
    loading: false,
    deleteReducer: false,
    confirm: false
  }
})

const reducer = (state, action) => (
  reducerObjects(state)[action.type] ?
    reducerObjects(state, action.payload)[action.type] : state
)


export { key, initialState, reducer }

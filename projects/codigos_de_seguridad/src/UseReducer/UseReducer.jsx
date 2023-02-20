import { Confirm } from './Confirm';
import { Delete } from './Delete';
import { useReducerComponent } from './hookReducer';

export function UseReducer() {

  const {
    state: { inputR, loading, error, deleteReducer, confirm },
    handleWriteonChange,
    checkInput,
    checkKey,
    handleReturn
  } = useReducerComponent();

  if ((!deleteReducer && !confirm) || loading) {
    return (
      <>
        <h1> Component Elimitanor With UseReducer</h1>
        <p>Please, Write the security code</p>
        {
          loading && (<p>Loading...</p>)
        }
        {
          (error && !loading) && (<p>Error: the code is wrong</p>)
        }
        <div style={{ display: 'flex', marginBottom: '20px' }} >
          <input
            placeholder='Write the Key'
            name='inputR'
            value={inputR}
            onChange={handleWriteonChange}
          >
          </input>
          <button type='submit' onClick={checkInput}>Check</button>
        </div>
      </>
    )
  } else if (!loading && deleteReducer) {
    return (
      <Delete
        checkKey={checkKey}
        handleReturn={handleReturn}
      />
    )
  }
  else if (!deleteReducer && confirm) {
    return (
      <Confirm
        handleReturn={handleReturn}
      />
    )
  }
}



import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>To-Dos</h1>
        <input type="text" />
        <input type="submit" />
        <ul>
            <div className='list-item'>
                <li>Wash clothes</li>
                <button>Edit</button>
                <button>Mark as done</button>
                <button>Remove</button>
            </div>
            <div className='list-item'>
                <li>Walk dog</li>
                <button>Edit</button>
                <button>Mark as done</button>
                <button>Remove</button>
            </div>
            <div className='list-item'>
                <li>Go to gym</li>
                <button>Edit</button>
                <button>Mark as done</button>
                <button>Remove</button>
            </div>
        </ul>
        <button>Clear list</button>
      </div>
    </>
  )
}

export default App

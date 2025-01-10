
import './App.css'
import InputField from './components/InputField/InputField'
import ListItems from './components/ListItems/ListItems'


function App() {

  return (
    <>
      <div>
        <h1>To-Dos</h1>
        <InputField/>
        <ListItems/>
        <button>Clear list</button>
      </div>
    </>
  )
}

export default App

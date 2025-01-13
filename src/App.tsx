
import './App.css'
import InputField from './components/InputField/InputField'
import ListItems from './components/ListItems/ListItems'

import { useState } from 'react';


function App() {

    const [listItem, setListItem] = useState<string>('');

  return (
    <>
      <div>
        <h1>To-Dos</h1>
        <InputField setListItem={setListItem}/>
        <ListItems listItem={listItem} setListItem={setListItem}/>
        <button>Clear list</button>
      </div>
    </>
  )
}

export default App

import ToggleMode from './components/ToggleMode/ToggleMode';
import InputField from './components/InputField/InputField'
import ListItems from './components/ListItems/ListItems'

import { useState } from 'react';

// function handleRemove() {

// }

function App() {

    const [listItems, setListItems] = useState<Array<{ id: string, text:string }>>([]);

  return (
    <>
      <div>
        <ToggleMode/>
        <h1>To-Dos</h1>
        <InputField listItems={listItems} setListItems={setListItems}/>
        <ListItems listItems={listItems} /*remove={handleRemove}*//>
        <button>Clear list</button>
      </div>
    </>
  )
}

export default App

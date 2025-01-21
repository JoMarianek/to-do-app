
import InputField from './components/InputField/InputField'
import ListItems from './components/ListItems/ListItems'

import { useState } from 'react';


function App() {

    const [listItems, setListItems] = useState<Array<string>>([]);

  return (
    <>
      <div>
        <h1>To-Dos</h1>
        <InputField listItems={listItems} setListItems={setListItems}/>
        <ListItems listItems={listItems}/>
        <button>Clear list</button>
      </div>
    </>
  )
}

export default App

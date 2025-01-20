import { SetStateAction } from "react"
import { useState } from "react";

interface InputFieldProp{
    listItems: Array<string>;
    setListItems: React.Dispatch<SetStateAction<Array<string>>>;
}


function InputField({listItems, setListItems }: InputFieldProp) {
    const[input, setInput] = useState<string>('');
    return (
        <>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick = {() => setListItems([...listItems, input])}>Add</button>
        </>
    )
}

export default InputField

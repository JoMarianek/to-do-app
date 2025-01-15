import { SetStateAction } from "react"
import { useState } from "react";

interface InputFieldProp{
    setListItem: React.Dispatch<SetStateAction<string>>
}


function InputField({ setListItem }: InputFieldProp) {
    const[input, setInput] = useState<string>('');
    return (
        <>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick = {() => setListItem(input)}>Add</button>
        </>
    )
}

export default InputField

// onclick it sets the listitem to content of input
// list item state needs to be handled in listitemcomp and in input comp
// so have state in app and pass a props to inout and 
// i want the input to be saved and then onCLick it should be set to listItem
//
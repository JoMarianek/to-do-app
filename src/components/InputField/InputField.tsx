import { SetStateAction } from "react"
import { useState } from "react";

interface InputFieldProp{
    listItems: Array<{ id: string, text:string }>;
    setListItems: React.Dispatch<SetStateAction<Array<{ id: string, text:string }>>>;
}
function increment(counter: number) {
    return counter++;
}

function InputField({listItems, setListItems }: InputFieldProp) {
    const[input, setInput] = useState<string>('');
    const[counter, setCounter] = useState<number>(0);
    return (
        <>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick = {() => {setListItems([...listItems, { id: `${setCounter(increment(counter))}`, text: input}]); setInput('')}}>Add</button> 
        </>
    )
}

export default InputField
//TODO: onClick set inut value to empty string
// add keys to the array items
import { SetStateAction } from "react"

interface InputFieldProp{
    setListItem: React.Dispatch<SetStateAction<string>>
}

function InputField({ setListItem }: InputFieldProp) {
    return (
        <>
            <form action="">
                <input type="text" onChange={(event) => setListItem = event.target.value}/>
                <button onClick={setListItem}>Add</button>
            </form>
        </>
    )

}

export default InputField

// onclick it sets the listitem to content of input
// list item state needs to be handled in listitemcomp and in input comp
// so have state in app and pass a props to inout and 
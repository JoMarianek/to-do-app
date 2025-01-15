
function ListItems({listItem, setListItem}) {

    return (
        <>
            <ul>
            <div className='list-item'>
                <li>{listItem}</li>
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
        </>
    )
}

export default ListItems


//for each add click of the button create a new list item element that has the list item as text but then somehow the 
// i think ListItems needs to be a child of input field and onlick it gets called? but then it would keep being rerendered and old listitem values wouldnt persist
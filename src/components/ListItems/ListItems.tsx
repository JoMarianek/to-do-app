
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
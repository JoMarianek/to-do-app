
interface ListItemsProps{
    listItems: Array<string>
}

function renderItem({listItems}: ListItemsProps) {
    return listItems.map((item: string) =>
        <>
            <li>
                <span>{item}</span>
                <div className="CUD-buttons">
                    <button>Edit</button>
                    <button>Mark as done</button>
                    <button>Remove</button>
                </div>
            </li>
        </>
    )
}

//Alex: better to have renderItem inline of ListItem to avoid prop drilling?

function ListItems({listItems}: ListItemsProps) {
    return (
        <>
            <ul>
                {renderItem({listItems})}
            </ul>
        </>
    )
}

export default ListItems
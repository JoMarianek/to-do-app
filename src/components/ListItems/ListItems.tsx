
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
                    <button /*onClick={remove}*/>Remove</button>
                </div>
            </li>
        </>
    )
}
// Note down: always use a single obj for props! best practive and keeps things clean!
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

//remove: filter.listItems(selected) => selected != {item}
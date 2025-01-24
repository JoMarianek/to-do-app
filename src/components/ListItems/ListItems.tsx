import React from 'react';


interface ListItemsProps{
    listItems: Array<{ id: string, text:string }>
}

function renderItem({listItems}: ListItemsProps) {
    return listItems.map((item: { id: string, text:string }) => {
        console.log(item.id);
        return (
            <React.Fragment key={item.id}>
                <li>
                    <span>{item.text}</span>
                    <div className="CUD-buttons">
                        <button>Edit</button>
                        <button>Mark as done</button>
                        <button /*onClick={remove}*/>Remove</button>
                    </div>
                </li>
            </React.Fragment>
        )
    })
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
import React from 'react';
import PropTypes from 'prop-types';
export const Items = ({ listOfItems, deleteElement, markDone, editing, setEditing, editingElement, setEditingElement, save, cancel, show }) => {

    return (
       listOfItems.length >0 ? <table border = "1">
            <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Completed
                        </th> 
                        <th>
                            Actions
                        </th> 
                    </tr>
            </thead>
            <tbody>
            {listOfItems.map((item) => {
                return (
                    show === false ? <tr key={item.id}>
                        {editing && item.id === editingElement.id ? <><td> <input value={editingElement.text} onChange={setEditingElement} /></td>
                            <td><input
                                    type="checkbox"
                                    checked={item.done}
                                    value={item.done}
                                    onChange={() => { markDone(item) }}
                                    style={{ marginRight: "20px" }}
                                /></td>
                            <td><button onClick={save}>Save</button>
                            <button onClick={cancel}>Cancel</button></td>
                        </>
                            : <>
                                <td>{item.text}</td>
                               <td> <input
                                    type="checkbox"
                                    checked={item.done}
                                    value={item.done}
                                    onChange={() => { markDone(item) }}
                                    style={{ marginRight: "20px" }}
                                /></td>
                                <td><button onClick={() => { deleteElement(item.id) }}>Delete</button>
                                <button onClick={() => { setEditing(item) }}>Edit </button></td>
                            </>}
                    </tr>
                        : item.done === false && <tr key={item.id}>
                            {editing && item.id === editingElement.id ? <><td> <input value={editingElement.text} onChange={setEditingElement} /></td>
                                <td><input
                                    type="checkbox"
                                    checked={item.done}
                                    value={item.done}
                                    onChange={() => { markDone(item) }}
                                    style={{ marginRight: "20px" }}
                                /></td>
                                <td><button onClick={save}>Save</button>
                                <button onClick={cancel}>Cancel</button></td>
                            </>
                                : <>
                                    <td>{item.text}</td>
                                    <td> <input
                                        type="checkbox"
                                        checked={item.done}
                                        value={item.done}
                                        onChange={() => { markDone(item) }}
                                    /></td>

                                    <td><button onClick={() => { deleteElement(item.id) }}>Delete</button>
                                    <button onClick={() => { setEditing(item) }}>Edit </button></td>
                                  
                                </>}
                        </tr>
                )
            })
                
            }</tbody>
        </table>: <h2>No Items added to Array yet !!! </h2>
    )

}

Items.propTypes = {
    listOfItems: PropTypes.arrayOf(PropTypes.object),
    deleteElement: PropTypes.func,
    markDone: PropTypes.func,
    editing: PropTypes.bool,
    setEditing: PropTypes.func,
    editingElement: PropTypes.object,
    setEditingElement: PropTypes.func,
    save: PropTypes.func,
    cancel: PropTypes.func,
    show: PropTypes.bool
}
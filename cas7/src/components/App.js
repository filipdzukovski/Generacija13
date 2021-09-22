import React, { useState, useEffect } from 'react';
import { Items } from './Items';

export const App = () => {

  const [element, setElement] = useState('');
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingElement, setEditingElement] = useState({});
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);


  useEffect(() => {
    setCount([...items.filter(item => item.done)].length);
  }, [items])
  function addElement() {
    let newItem = {
      id: Math.random() * 100,
      text: element,
      done: false
    }

    setItems([...items, newItem]);
    setElement('');
  }

  function deleteElement(id) {
    setItems([...items.filter(item => item.id !== id)]);
  }

  function markDone(item) {
    setItems([...items.map(elem => (elem.id === item.id) ? { id: elem.id, text: elem.text, done: !elem.done } : elem)]);

  }

  function editElement(item) {
    setEditing(!editing);
    setEditingElement(item);
  }

  function updateElement() { //if(uslov){//code} else{//code} item.id === editingElement.id
    setItems([...items.map(item => item.id === editingElement.id ? 
      { id: item.id,
        text: editingElement.text, 
        done: item.done 
      } 
      : item
      )])
    setEditing(false);
    setEditingElement({});
  }


  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter Element"
        value={element}
        onChange={e => { setElement(e.target.value) }}
      />
      <button onClick={addElement}>
        Add Element
      </button>
      <br />
      {items.length > 0 &&<h2>Number of completed Items:{count}</h2>}
      {items.length > 0 && items.filter(item => item.done === true).length > 0 && <button onClick={() => setShow(!show)}>{show ? "Show Completed" : "Hide Completed"}</button>}
      <br />

      <Items
        listOfItems={items}
        deleteElement={deleteElement}
        markDone={markDone}
        editing={editing}
        setEditing={editElement}
        editingElement={editingElement}
        setEditingElement={(e) => { setEditingElement({ ...editingElement, text: e.target.value }) }}
        save={updateElement}
        cancel={() => { setEditing(false) }}
        show={show}
      />
    </div>
  )
}
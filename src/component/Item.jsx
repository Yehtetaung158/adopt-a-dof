// src/Items.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from '../store/service/itemSlice';

function Items() {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');
  const [updateItemValue, setUpdateItemValue] = useState('');
  const [updateItemId, setUpdateItemId] = useState(null);

  const handleAddItem = () => {
    const item = {
      id: Date.now(),
      value: newItem,
    };
    dispatch(addItem(item));
    setNewItem('');
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = () => {
    dispatch(updateItem({ id: updateItemId, value: updateItemValue }));
    setUpdateItemId(null);
    setUpdateItemValue('');
  };

  return (
    <div>
      <h2>Items</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => {
              setUpdateItemId(item.id);
              setUpdateItemValue(item.value);
            }}>Update</button>
          </li>
        ))}
      </ul>
      {updateItemId && (
        <div>
          <input
            type="text"
            value={updateItemValue}
            onChange={(e) => setUpdateItemValue(e.target.value)}
          />
          <button onClick={handleUpdateItem}>Confirm Update</button>
        </div>
      )}
    </div>
  );
}

export default Items;

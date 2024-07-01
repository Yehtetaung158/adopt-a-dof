// src/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        if (state.items.length < 10) {
            state.items.push(action.payload);
            console.log(state.items)
          } else {
            console.warn('Cannot add more than 10 items.');
          }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;

export default itemsSlice.reducer;

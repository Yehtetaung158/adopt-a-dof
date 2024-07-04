import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ApiService } from './service/Apiservice'
import itemsReducer from './service/itemSlice'
import blogsReducer from './service/Blogservise'
import petServiceReducer from './service/petService'

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.error('Could not save state', error);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined; // No saved state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Could not load state', error);
    return undefined;
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    items: itemsReducer ,
    blogs:blogsReducer,
    petService:petServiceReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
  preloadedState,
})

setupListeners(store.dispatch)

store.subscribe(() => {
  saveState(store.getState());
});
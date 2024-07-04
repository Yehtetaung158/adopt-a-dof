import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSingleimg: false,
  currentArr:null
};

const petServiceSlice = createSlice({
  name: 'petService',
  initialState,
  reducers: {
    toggleSingleimg(state) {
      state.isSingleimg = !state.isSingleimg;
    },
    changeArr(state,action){
        state.currentArr=action.payload
    }
  },
});

export const { toggleSingleimg,changeArr } = petServiceSlice.actions;

export default petServiceSlice.reducer;

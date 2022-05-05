import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggle: (state, value) => {
      const check = localStorage.getItem('user');
      console.log(check);
      const index = state.value.findIndex((object)=>{
        return object.id === value.payload.id
      })
      if (index !== -1) {
        state.value.splice(index, 1);
      } else {
        state.value.push(value.payload);
      }
      console.log(state.value);
    },
  },
});

export const { toggle } = favSlice.actions;
export default favSlice.reducer;

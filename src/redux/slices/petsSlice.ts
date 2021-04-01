import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  pets: string[];
};

const initialState: SliceState = {
  pets: [],
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addPet(state, action) {
      state.pets = [...state.pets, action.payload];
    },
  },
});

export const { addPet } = petsSlice.actions;

export default petsSlice.reducer;

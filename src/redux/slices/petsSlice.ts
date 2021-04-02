import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../../dataTypes";

type SliceState = {
  pets: Pet[];
};

const initialState: SliceState = {
  pets: [],
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addPet(state, action: PayloadAction<Pet>) {
      state.pets = [...state.pets, action.payload];
    },

    updatePet(state, action: PayloadAction<Pet>) {
      state.pets = state.pets.map((pet) => {
        return action.payload.id === pet.id
          ? { ...pet, dayInStock: action.payload.dayInStock }
          : pet;
      });
    },
  },
});

export const { addPet, updatePet } = petsSlice.actions;

export default petsSlice.reducer;

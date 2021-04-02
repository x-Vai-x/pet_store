import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../../dataTypes";

type SliceState = {
  unstockedPets: Pet[];
  mondayStockedPets: Pet[];
  tuesdayStockedPets: Pet[];
  wednesdayStockedPets: Pet[];
  thursdayStockedPets: Pet[];
  fridayStockedPets: Pet[];
};

const initialState: SliceState = {
  unstockedPets: [],
  mondayStockedPets: [],
  tuesdayStockedPets: [],
  wednesdayStockedPets: [],
  thursdayStockedPets: [],
  fridayStockedPets: [],
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addPet(state, action: PayloadAction<Pet>) {
      state.unstockedPets = [...state.unstockedPets, action.payload];
    },
    unstockPet(state, action: PayloadAction<Pet>) {
      state.unstockedPets = state.unstockedPets.filter(
        (pet) => pet !== action.payload
      );

      state.mondayStockedPets = state.mondayStockedPets.filter(
        (pet) => pet !== action.payload
      );
      state.tuesdayStockedPets = state.tuesdayStockedPets.filter(
        (pet) => pet !== action.payload
      );
      state.wednesdayStockedPets = state.wednesdayStockedPets.filter(
        (pet) => pet !== action.payload
      );
      state.thursdayStockedPets = state.thursdayStockedPets.filter(
        (pet) => pet !== action.payload
      );
      state.fridayStockedPets = state.fridayStockedPets.filter(
        (pet) => pet !== action.payload
      );
    },
    stockPetForMonday(state, action: PayloadAction<Pet>) {
      this.unstockPet(state, action);
      state.mondayStockedPets = [...state.mondayStockedPets, action.payload];
    },
    stockPetForTuesday(state, action: PayloadAction<Pet>) {
      this.unstockPet(state, action);
      state.tuesdayStockedPets = [...state.tuesdayStockedPets, action.payload];
    },
    stockPetForWednesday(state, action: PayloadAction<Pet>) {
      this.unstockPet(state, action);
      state.wednesdayStockedPets = [
        ...state.wednesdayStockedPets,
        action.payload,
      ];
    },
    stockPetForThursday(state, action: PayloadAction<Pet>) {
      this.unstockPet(state, action);
      state.thursdayStockedPets = [
        ...state.thursdayStockedPets,
        action.payload,
      ];
    },
    stockPetForFriday(state, action: PayloadAction<Pet>) {
      this.unstockPet(state, action);
      state.fridayStockedPets = [...state.fridayStockedPets, action.payload];
    },
  },
});

export const {
  addPet,
  stockPetForMonday,
  stockPetForTuesday,
  stockPetForWednesday,
  stockPetForThursday,
  stockPetForFriday,
} = petsSlice.actions;

export default petsSlice.reducer;

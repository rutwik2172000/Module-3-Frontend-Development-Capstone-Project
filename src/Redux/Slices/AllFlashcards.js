import { createSlice } from "@reduxjs/toolkit";

const allFlashCardSlice = createSlice({
  name: "allFlashCards",
  initialState: [],
  reducers: {
    populateFlashCards: (state, action) => {
      return [...state, ...action.payload];
    },
    updateFlashCards: (state, action) => {
      return [...state, { ...action.payload }];
    },
    deleteFlashCard: (state, action) => {
      return state.filter((flashCards) => flashCards.id !== action.payload);
    },
  },
});

export const { populateFlashCards, updateFlashCards, deleteFlashCard } =
  allFlashCardSlice.actions;

export default allFlashCardSlice.reducer;

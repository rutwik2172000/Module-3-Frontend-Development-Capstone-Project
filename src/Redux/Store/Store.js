import { configureStore } from "@reduxjs/toolkit";
import  allFlashCardSlice from '../Slices/AllFlashcards';
const store = configureStore({
    reducer:{
        allFlashCards : allFlashCardSlice,
    }
})

export default store;
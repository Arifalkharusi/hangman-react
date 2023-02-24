import { createSlice } from "@reduxjs/toolkit";

export const handlerSlice = createSlice({
  name: "handlers",
  // state
  initialState: {
    letters: [],
    word: [],
    chances: 1,
    target: 0,
    results: "",
    showKeys: true,
  },
  // handler Func
  reducers: {
    // sets up the selected word
    onLoad: (state, action) => {
      state.word = [...action.payload];

      action.payload.forEach((x) => {
        state.letters = [
          ...state.letters,
          {
            content: x,
            found: false,
          },
        ];
      });
    },
    // checks for winner
    checkLetter: (state, action) => {
      // tracks how many chances used
      !state.word.includes(action.payload) && state.chances++;

      state.letters.forEach((x, i) => {
        if (x.content === action.payload) {
          state.letters[i].found = true;
          state.target++;
        }
      });
      // checks if won
      if (state.target === state.word.length) {
        state.results = "You Won!";
        state.showKeys = false;
      }
      // checks if lost
      if (state.chances >= 11) {
        state.results = "Game Over!";
        state.showKeys = false;
      }
    },
  },
});

export const { onLoad, checkLetter } = handlerSlice.actions;
export default handlerSlice.reducer;

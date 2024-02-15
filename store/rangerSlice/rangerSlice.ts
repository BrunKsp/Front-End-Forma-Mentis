import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface RangerState {
  number: number;
  state: boolean;
}

// Initial state
const initialState: RangerState[] = [
  { number: 1, state: true },
  {
    number: 2,
    state: false,
  },
  {
    number: 3,
    state: false,
  },
  {
    number: 4,
    state: false,
  },
  {
    number: 5,
    state: false,
  },
  {
    number: 6,
    state: false,
  },
  {
    number: 7,
    state: false,
  },
];

// Actual Slice
export const rangerSlice = createSlice({
  name: "ranger",
  initialState,
  reducers: {
    // Action to set the authentication status
    updateState(state, action) {
      state.map(() => console.log(1));
      //   console.log(result);
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.ranger,
      };
    },
  },
});

export const { updateState } = rangerSlice.actions;

export const selectRangerState = (state: AppState) => state.ranger;

export default rangerSlice.reducer;

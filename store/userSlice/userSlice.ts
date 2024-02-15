import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface UserState {
  nome: string;
  email: string;
}

// Initial state
const initialState: UserState = {
  nome: "",
  email: "",
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserState(state, action) {
      state.nome = action.payload.nome;
      state.email = action.payload.email;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserState } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;

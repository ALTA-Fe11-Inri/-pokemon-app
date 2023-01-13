import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { PokemonType } from "../../types/pokemon";

interface StateType {
  favorites: PokemonType[];
  loading: boolean;
}

const initialState: StateType = {
  favorites: [],
  loading: true,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setFavorites, setLoading } = sliceState.actions;
export default reducer;

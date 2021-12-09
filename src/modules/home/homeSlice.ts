import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../shared/types";

export interface HomeState {
  currentCategory: Category | undefined;
}

const initialState: HomeState = {
  currentCategory: undefined,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<Category>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory } = homeSlice.actions;

export default homeSlice.reducer;

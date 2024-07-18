import { createSlice } from "@reduxjs/toolkit";
import { getCamperID, getCampers } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getCampers.rejected, handleRejected)
      .addCase(getCamperID.pending, handlePending)
      .addCase(getCamperID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const camperId = payload;
        const isFavorite = state.favorites.includes(camperId);
        if (isFavorite) {
          state.favorites = state.favorites.filter((id) => id !== camperId);
        } else {
          state.favorites.push(camperId);
        }
      })
      .addCase(getCamperID.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;

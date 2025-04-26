import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const fetchClothing = createAsyncThunk(
  "clothing/fetchClothing",
  async (category) => {
    const params = category ? { category } : {};
    const response = await api.get("/clothing", { params });
    return response.data;
  }
);

const clothingSlice = createSlice({
  name: "clothing",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClothing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClothing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export default clothingSlice.reducer;

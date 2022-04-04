import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    data: [],
    searchData: [],
  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;

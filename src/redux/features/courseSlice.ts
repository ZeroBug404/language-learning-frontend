import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CourseState {
  category: string;
}

// Define the initial state using that type
const initialState: CourseState = {
  category: "English",
};

export const courseSlice = createSlice({
  name: "course",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = courseSlice.actions;

export default courseSlice.reducer;

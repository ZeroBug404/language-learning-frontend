import { baseApi } from "./api/baseApi";
import courseReducer from "./features/courseSlice";

export const reducer = {
  category: courseReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

import { baseApi } from "./baseApi";

const CATEGORY_URL = "/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/create-category`,
        method: "POST",
        body: data,
      }),
    }),
    getAllCategory: build.query({
      query: (arg) => {
        return {
          url: CATEGORY_URL,
          method: "GET",
          params: arg,
        };
      },
    }),
    getSingleCategory: build.query({
      query: (id) => `${CATEGORY_URL}/${id}`,
    }),
    // update
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
    }),
    // delete
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetSingleCategoryQuery,
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;

import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: (id) => `${USER_URL}/${id}`,
    }),
    // update
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
    }),
    // delete
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useUpdateUserMutation, useDeleteUserMutation, useGetSingleUserQuery} = userApi;

import { baseApi } from "./baseApi";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
    }),

    admins: build.query({
      query: () => {
        return {
          url: '/users',
        };
      },
    }),
  }),
});

export const { useAdminsQuery, useAddAdminWithFormDataMutation } = adminApi;

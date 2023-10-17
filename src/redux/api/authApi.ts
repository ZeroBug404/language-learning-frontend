import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `auth/signin`,
        method: "POST",
        body: loginData,
      }),
    }),
    userSignup: build.mutation({
      query: (signupData) => ({
        url: `auth/signup`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserSignupMutation } = authApi;

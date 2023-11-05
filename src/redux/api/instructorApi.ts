import { baseApi } from "./baseApi";

const INSTRUCTOR_URL = "/instructors";

export const instructorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createInstructor: build.mutation({
      query: (data) => ({
        url: `${INSTRUCTOR_URL}/create-instructor`,
        method: "POST",
        body: data,
      }),
    }),

    instructors: build.query({
      query: () => {
        return {
          url: `${INSTRUCTOR_URL}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateInstructorMutation, useInstructorsQuery } = instructorApi;

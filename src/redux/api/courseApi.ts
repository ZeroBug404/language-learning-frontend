import { baseApi } from "./baseApi";

const COURSE_URL = "/courses";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCourse: build.mutation({
      query: (data) => ({
        url: COURSE_URL,
        method: "POST",
        body: data,
      }),
    }),
    getAllCourse: build.query({
      query: (arg) => {
        return {
          url: COURSE_URL,
          method: "GET",
          params: arg,
        };
      },
    }),
    getSingleCourse: build.query({
      query: (id) => `${COURSE_URL}/${id}`,
    }),
    // update
    updateCourse: build.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
    }),
    // delete
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `${COURSE_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddCourseMutation,
  useGetAllCourseQuery,
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation
} = courseApi;

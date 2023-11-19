"use client";

import { useGetSingleCourseQuery } from "@/redux/api/courseApi";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const CourseDetailPage = ({ searchParams }: Props) => {
  const { data } = useGetSingleCourseQuery(searchParams.id);

//   console.log(data);

  return (
    <div
      style={{
        marginTop: "7rem",
      }}
    >
      <h1>Course Detail Page</h1>
    </div>
  );
};

export default CourseDetailPage;

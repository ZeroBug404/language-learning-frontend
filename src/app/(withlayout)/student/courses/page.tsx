"use client";

import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
// import { IDepartment } from "@/types";
import ActionBar from "@/components/ui/ActionBar";
import LLTable from "@/components/ui/LLTable";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";

const CoursesPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetAllCourseQuery([]);

  const [updateUserData] = useUpdateUserMutation();

  const [deleteUser] = useDeleteUserMutation();

  //   const students = data?.data?.filter(
  //     (student: any) => student.role === "student"
  //   );

  // const { userId } = getUserInfo() as any;

  const deleteUserData = async (id: string) => {
    await deleteUser(id);

    message.success("Student deleted successfully!");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: function (data: any) {
        const fullName = `${data} `;
        return <>{fullName}</>;
      },
    },
    {
      title: "Total Week",
      dataIndex: "totalWeek",
      render: function (data: any) {
        const contactNo = `${data} `;
        return <>{contactNo}</>;
      },
    },
    {
      title: "Level",
      dataIndex: "level",
      render: function (data: any) {
        const contactNo = `${data} `;
        return <>{contactNo}</>;
      },
    },
    {
      title: "Qizes",
      dataIndex: "quizzes",
      render: function (data: any) {
        const contactNo = `${data} `;
        return <>{contactNo}</>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: function (data: any) {
        const contactNo = `${data} `;
        return <>{contactNo}</>;
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button
                onClick={() => console.log(data)}
                type="primary"
                style={{
                  backgroundColor: "#1677ff",
                }}
              >
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/admin/edit/${data.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                  backgroundColor: "#1677ff",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => deleteUserData(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      {/* <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      /> */}
      <ActionBar title="Course List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admin/student/create">
            <Button type="primary" style={{ backgroundColor: "#1677ff" }}>
              Create Admin
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <LLTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.data}
        pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default CoursesPage;

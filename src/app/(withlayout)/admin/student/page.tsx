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
import { useAdminsQuery } from "@/redux/api/adminApi";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";

const StudentPage = () => {
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
  const { data, isLoading } = useAdminsQuery([]);

  const [updateUserData] = useUpdateUserMutation();

  const [deleteUser] = useDeleteUserMutation();

  const students = data?.data?.filter(
    (student: any) => student.role === "student"
  );

  // const changeRoleToSuperAdmin = (id: string) => {
  //   const data = {
  //     id: id,
  //     body: {
  //       role: "super_admin",
  //     },
  //   };
  //   updateUserData(data);
  //   message.success("Updated to super admin");
  // };

  // const { userId } = getUserInfo() as any;

  const deleteUserData = async (id: string) => {
    await deleteUser(id);

    message.success("Student deleted successfully!");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: function (data: any) {
        const fullName = `${data} `;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      render: function (data: any) {
        const email = `${data} `;
        return <>{email}</>;
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
      title: "Contact no.",
      dataIndex: "contactNo",
      render: function (data: any) {
        const contactNo = `${data} `;
        return <>{contactNo}</>;
      },
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
    // {
    //   title: "Change Role",
    //   dataIndex: "id",
    //   render: function (data: any) {
    //     return (
    //       <>
    //         <Button
    //           onClick={() => changeRoleToSuperAdmin(data)}
    //           type="primary"
    //           danger
    //         >
    //           Make as Super Admin
    //         </Button>
    //       </>
    //     );
    //   },
    // },
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
      <ActionBar title="Student List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>

          {/* <Link href="/admin/student/create">
            <Button type="primary" style={{ backgroundColor: "#1677ff" }}>
              Create Student
            </Button>
          </Link> */}

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
        dataSource={students}
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

export default StudentPage;

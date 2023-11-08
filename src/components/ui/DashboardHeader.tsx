import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const DashboardHeader = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const { role, userId } = getUserInfo() as any;
  // console.log(role, userId);

  return (
    <AntHeader
      style={{
        background: "#fff",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <Link href={"#"}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Link>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default DashboardHeader;

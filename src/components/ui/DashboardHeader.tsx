import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
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
        justify="space-between"
        align="middle"
        style={{
          height: "100%",
        }}
        gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}
      >
        <Col span={12}>
          <Link
            href="/"
            style={{
              color: "white",
              fontSize: "1rem",
              textAlign: "center",
              marginBottom: ".5rem",
              padding: "1rem 1.5rem",
              backgroundColor: "#41246d",
              boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.50)",
            }}
          >
            Home
          </Link>
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
    </AntHeader>
  );
};

export default DashboardHeader;

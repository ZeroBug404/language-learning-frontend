"use client";

import { Layout } from "antd";
import DashboardHeader from "./DashboardHeader";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ minHeight: "100vh" }}>
      <DashboardHeader />
      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;

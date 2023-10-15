import React from "react";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/dashboard/Dashboard.style";

const Dashboard = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Dashboard;

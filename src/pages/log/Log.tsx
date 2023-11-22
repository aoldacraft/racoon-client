import React, { useEffect, useState } from "react";
import { ILog } from "../../interface/LogInterface";
import instance from "../../api/util/instance";
import styled from "styled-components";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/dashboard/Dashboard.style";
import { useQuery } from "@tanstack/react-query";

const Log = () => {
  const getLogs = async (): Promise<ILog[]> => {
    const res = await instance.get(
      `/game/e29d7073-ab93-430d-854f-89e3d16e0087/log`
    );
    return res.data;
  };

  const { data: logs } = useQuery({ queryKey: ["logs"], queryFn: getLogs });

  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>Log Page</PageTitle>
      </PageHeaderWrapper>
      <LogListContainer>
        {logs?.map((log) => (
          <LogContainer>
            <LogData>[{log.log_time}] </LogData>
            <LogData>[{log.service_name}] </LogData>
            <LogData>{log.log_text}</LogData>
          </LogContainer>
        ))}
      </LogListContainer>
    </>
  );
};

export default Log;

const LogListContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
`;

const LogContainer = styled.div`
  display: flex;
`;

const LogData = styled.div`
  margin-right: 3px;
`;

import React, { useEffect, useState } from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/dashboard/Dashboard.style";
import { useParams } from "react-router-dom";
import GameCard from "../../components/card/GameCard";
import * as S from "../../styles/pages/dashboard/Dashboard.style";
import { Content, ContentTitle, ContentWrapper } from "../../styles/util";
import instance from "../../api/util/instance";
import { IService } from "../../interface/ServiceInterface";
import { IGame } from "../../interface/GameInterface";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { serviceName } = useParams();

  const getServiceInfo = async (): Promise<IService> => {
    const res = await instance.get(`/service/${serviceName}`);
    return res.data;
  };

  const getGames = async (): Promise<IGame[]> => {
    const res = await instance.get(`/service/${serviceName}/game`);
    return res.data;
  };

  const { data: service } = useQuery({
    queryKey: [`${serviceName}`],
    queryFn: getServiceInfo,
  });

  const { data: games } = useQuery({ queryKey: ["games"], queryFn: getGames });

  console.log(service);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>Service : {service?.service_name} Dashboard</PageTitle>
      </PageHeaderWrapper>
      <S.ServiceContainer>
        <ContentWrapper>
          <ContentTitle>Service : </ContentTitle>
          <Content>{service?.service_name}</Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>Live Server : </ContentTitle>
          <Content>{service?.server_quantity}</Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>Total User :</ContentTitle>
          <Content>{service?.total_player}</Content>
        </ContentWrapper>
      </S.ServiceContainer>
      <S.GameContainer>
        {games?.map((game) => (
          <GameCard game={game} key={game.uuid} />
        ))}
      </S.GameContainer>
    </>
  );
};

export default Dashboard;

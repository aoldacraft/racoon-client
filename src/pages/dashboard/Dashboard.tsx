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

const Dashboard = () => {
  const { serviceName } = useParams();

  const [service, setService] = useState<IService>();
  const [games, setGames] = useState<IGame[]>([]);
  const getAllServices = async () => {
    const data = await instance.get(`/service/${serviceName}`);
    console.log(data);
    console.log("hi");
    setService(data.data);
  };

  const getGames = async () => {
    const data = await instance.get(`/service/${serviceName}/game`);

    console.log(data);
    setGames(data.data);
  };

  // const { data } = useQuery(["allServices"], getAllServices);

  useEffect(() => {
    getAllServices();
    getGames();
  }, []);

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
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </S.GameContainer>
    </>
  );
};

export default Dashboard;

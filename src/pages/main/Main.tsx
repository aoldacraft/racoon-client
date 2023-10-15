import React from "react";
import * as S from "../../styles/pages/main/Main.style";
import ServiceCard from "../../components/card/ServiceCard";

const dummyData = [
  {
    service: "A Game",
    server_quantity: 4,
    total_player: 150,
  },
  {
    service: "B Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "C Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "D Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "E Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "F Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "G Game",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "H Game",
    server_quantity: 5,
    total_player: 10,
  },
];

const Main = () => {
  return (
    <>
      <S.PageHeaderWrapper>
        <S.PageTitle>Racoon Main Page :)</S.PageTitle>
      </S.PageHeaderWrapper>
      <S.ServiceContainer>
        {dummyData.map((data) => (
          <ServiceCard
            service={data.service}
            server_quantity={data.server_quantity}
            total_player={data.total_player}
          />
        ))}
      </S.ServiceContainer>
    </>
  );
};

export default Main;

import React from "react";
import * as S from "../../styles/pages/main/Main.style";
import ServiceCard from "../../components/card/ServiceCard";

const dummyData = [
  {
    service: "game_A",
    server_quantity: 4,
    total_player: 150,
  },
  {
    service: "game_B",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_C",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_D",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_E",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_F",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_G",
    server_quantity: 5,
    total_player: 10,
  },
  {
    service: "game_H",
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
            key={data.service}
            server_quantity={data.server_quantity}
            total_player={data.total_player}
          />
        ))}
      </S.ServiceContainer>
    </>
  );
};

export default Main;

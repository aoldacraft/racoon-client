import React from "react";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/dashboard/Dashboard.style";
import { useParams } from "react-router-dom";
import GameCard from "../../components/card/GameCard";
import * as S from "../../styles/pages/dashboard/Dashboard.style";

const dummyGames = [
  {
    uuid: "jjf8qe89fh891h4984",
    server: "10.12.1.56",
    player: 4,
    state: "ACTIVE",
    time: 572,
  },
  {
    uuid: "jjf8qe89fh891h498r14",
    server: "10.12.1.72",
    player: 7,
    state: "TERMINATE",
    time: 1245,
  },
  {
    uuid: "jjf8qe89fh891h498r4",
    server: "10.11.1.52",
    player: 3,
    state: "TERMINATE",
    time: 1245,
  },
];

const Dashboard = () => {
  const { service } = useParams();

  console.log(service);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>Service : {service} Dashboard</PageTitle>
      </PageHeaderWrapper>
      <S.GameContainer>
        {dummyGames.map((game) => (
          <GameCard
            key={game.uuid}
            uuid={game.uuid}
            server={game.server}
            player={game.player}
            state={game.state}
            time={game.time}
          />
        ))}
      </S.GameContainer>
    </>
  );
};

export default Dashboard;

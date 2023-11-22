import React from "react";
import * as S from "../../styles/components/card/GameCard.style";
import { IGame } from "../../interface/GameInterface";

const GameCard = ({ game }: { game: IGame }) => {
  return (
    <S.GameCard>
      <S.ContentContainer>
        <S.ContentTitle>Server IP : </S.ContentTitle>
        <S.Content>{game.server_ip}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Player : </S.ContentTitle>
        <S.Content>{game.player_quantity}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>State : </S.ContentTitle>
        <S.Content>{game.game_state}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Time : </S.ContentTitle>
        <S.Content>{game.state_time}</S.Content>
      </S.ContentContainer>
    </S.GameCard>
  );
};

export default GameCard;

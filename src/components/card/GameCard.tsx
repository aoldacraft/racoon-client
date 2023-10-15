import React from "react";
import * as S from "../../styles/components/card/GameCard.style";
import { IGame } from "../../interface/GameInterface";

const GameCard = ({ uuid, server, player, state, time }: IGame) => {
  return (
    <S.GameCard>
      <S.ContentContainer>
        <S.ContentTitle>Server : </S.ContentTitle>
        <S.Content>{server}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Player : </S.ContentTitle>
        <S.Content>{player}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>State : </S.ContentTitle>
        <S.Content>{state}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Time : </S.ContentTitle>
        <S.Content>{time}</S.Content>
      </S.ContentContainer>
    </S.GameCard>
  );
};

export default GameCard;

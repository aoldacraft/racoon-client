import React from "react";
import * as S from "../../styles/components/card/ServiceCard.style";

const ServiceCard = ({
  service,
  server_quantity,
  total_player,
}: {
  service: string;
  server_quantity: number;
  total_player: number;
}) => {
  return (
    <S.ServiceCard>
      <S.ContentContainer>
        <S.ContentTitle>Service :</S.ContentTitle>
        <S.Content>{service} Game</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Live Serve :</S.ContentTitle>
        <S.Content>{server_quantity}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentTitle>Total User :</S.ContentTitle>
        <S.Content>{total_player}</S.Content>
      </S.ContentContainer>
    </S.ServiceCard>
  );
};

export default ServiceCard;

import React from "react";
import * as S from "../../styles/components/card/ServiceCard.style";
import { Link } from "react-router-dom";
import { IService } from "../../interface/ServiceInterface";

const ServiceCard = ({ service, server_quantity, total_player }: IService) => {
  return (
    <Link to={`/dashboard/${service}`}>
      <S.ServiceCard>
        <S.ContentContainer>
          <S.ContentTitle>Service :</S.ContentTitle>
          <S.Content>{service}</S.Content>
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
    </Link>
  );
};

export default ServiceCard;

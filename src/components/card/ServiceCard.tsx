import React from "react";
import * as S from "../../styles/components/card/ServiceCard.style";
import { Link } from "react-router-dom";
import { IService } from "../../interface/ServiceInterface";

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <Link to={`/dashboard/${service.service_name}`}>
      <S.ServiceCard>
        <S.ContentContainer>
          <S.ContentTitle>Service :</S.ContentTitle>
          <S.Content>{service.service_name}</S.Content>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentTitle>Live Server :</S.ContentTitle>
          <S.Content>{service.server_quantity}</S.Content>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentTitle>Total User :</S.ContentTitle>
          <S.Content>{service.total_player}</S.Content>
        </S.ContentContainer>
      </S.ServiceCard>
    </Link>
  );
};

export default ServiceCard;

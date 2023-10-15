import React from "react";
import * as S from "../../styles/pages/main/Main.style";

const Main = () => {
  return (
    <>
      <S.PageHeaderWrapper>
        <S.PageTitle>Racoon Main Page :)</S.PageTitle>
      </S.PageHeaderWrapper>
      <div>
        <S.ServiceCard>
          <S.ContentContainer>
            <S.ContentTitle>Service :</S.ContentTitle>
            <S.Content> A Game</S.Content>
          </S.ContentContainer>
          <S.ContentContainer>
            <S.ContentTitle>Live Serve :</S.ContentTitle>
            <S.Content>3</S.Content>
          </S.ContentContainer>
          <S.ContentContainer>
            <S.ContentTitle>Total User :</S.ContentTitle>
            <S.Content>13</S.Content>
          </S.ContentContainer>
        </S.ServiceCard>
      </div>
    </>
  );
};

export default Main;

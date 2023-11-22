import React from "react";
import { ILog } from "../../interface/LogInterface";
import * as S from "../../styles/components/table/LogTable.style";

const LogTable = ({ logs }: { logs: ILog[] }) => {
  return (
    <S.TableContainer>
      <S.TableTitle>Game Log</S.TableTitle>
      <S.Table>
        <thead>
          <S.Row>
            <S.Heading scope="col">로그ID</S.Heading>
            <S.Heading scope="col">내용</S.Heading>
            <S.Heading scope="col">생성 시간</S.Heading>
            <S.Heading scope="col"></S.Heading>
            <S.Heading scope="col" colSpan={2}></S.Heading>
          </S.Row>
        </thead>
        <tbody>
          {/* {datas.map((data) => (
            <S.Row key={data.userId}>
              <S.Data>{data.nickName}</S.Data>
              <S.Data>{data.userAccount}</S.Data>
              <S.Data>{data.dateOfBirth}</S.Data>
              <S.Data>{data.userPhoneNum}</S.Data>
              <S.ApproveButton
                onClick={() =>
                  suspendUser(
                    data.userId,
                    parseInt(localStorage.getItem("userId") as string)
                  )
                }
              >
                정지
              </S.ApproveButton>
              <S.RejectButton>정지해제</S.RejectButton>
            </S.Row>
          ))} */}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default LogTable;

import * as S from "../../styles/pages/main/Main.style";
import ServiceCard from "../../components/card/ServiceCard";
import instance from "../../api/util/instance";
import { IService } from "../../interface/ServiceInterface";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const getServices = async (): Promise<IService[]> => {
    const res = await instance.get("/service");
    console.log(res.data);
    return res.data;
  };

  const { data: services } = useQuery({
    queryKey: ["getService"],
    queryFn: getServices,
  });

  return (
    <>
      <S.PageHeaderWrapper>
        <S.PageTitle>Racoon Main Page :)</S.PageTitle>
      </S.PageHeaderWrapper>
      <S.ServiceContainer>
        {services?.map((service: any) => (
          <ServiceCard key={service.service_name} service={service} />
        ))}
      </S.ServiceContainer>
    </>
  );
};

export default Main;

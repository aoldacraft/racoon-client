import React, { useEffect, useState } from "react";
import * as S from "../../styles/pages/main/Main.style";
import ServiceCard from "../../components/card/ServiceCard";
import instance from "../../api/util/instance";
import { IService } from "../../interface/ServiceInterface";

const Main = () => {
  const [services, setServices] = useState<IService[]>([]);
  const getAllServices = async () => {
    const data = await instance.get("/service");
    console.log(data);
    console.log("hi");
    setServices(data.data);
  };

  // const { data } = useQuery(["allServices"], getAllServices);

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <S.PageHeaderWrapper>
        <S.PageTitle>Racoon Main Page :)</S.PageTitle>
      </S.PageHeaderWrapper>
      <S.ServiceContainer>
        {services.map((service) => (
          <ServiceCard key={service.service_name} service={service} />
        ))}
      </S.ServiceContainer>
    </>
  );
};

export default Main;

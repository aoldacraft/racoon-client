import React, { useEffect, useState } from "react";
import { ILog } from "../../interface/LogInterface";
import instance from "../../api/util/instance";

const Log = () => {
  const [logs, setLogs] = useState<ILog[]>([]);

  const getLogs = async () => {
    const data = await instance.get(
      `/game/e29d7073-ab93-430d-854f-89e3d16e0087/log`
    );
    console.log(data);
    console.log("hi");
    setLogs(data.data);
  };

  // const { data } = useQuery(["allServices"], getAllServices);

  useEffect(() => {
    getLogs();
  }, []);
  return (
    <div>
      {logs.map((log) => (
        <>
          <div>{log.log_id}</div>
          <div>{log.log_text}</div>
          <div>{log.log_time}</div>
          <div>{log.service_name}</div>
          <div>{log.uuid}</div>
        </>
      ))}
    </div>
  );
};

export default Log;

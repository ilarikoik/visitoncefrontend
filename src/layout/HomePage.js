import { useEffect, useState } from "react";
import Content from "../components/Content";
import { getIpAddress } from "../hooks/ipAddress";
import { Navigate } from "react-router-dom";
import { useSetUser, useUser } from "../context/UserContext";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [status, setStatus] = useState(null);
  const setUser = useSetUser();
  const user = useUser();

  useEffect(() => {
    const getData = async () => {
      console.log("tried home page");
      const res = await getIpAddress({
        ipAddress: "123.123.123.123",
        visti_time: new Date(),
      });
      // console.log("response from server:", res);
      setStatus(res.status);
      setUser(res);
      console.log("user status:", res);
    };
    getData();
  }, []);

  if (status === "already_visited") {
    return <Navigate to="/youalreadyvisitedthiswebsite" />;
  }

  return (
    <div className="bg-slate-700 min-h-screen w-full">
      <Navbar ipAddress={user?.ipAddress} />
      <div className="h-60"></div>
      <Content />
    </div>
  );
}

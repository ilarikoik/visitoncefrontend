import { useEffect, useState } from "react";
import Content from "../components/Content";
import { getIpAddress } from "../hooks/ipAddress";
import { Navigate } from "react-router-dom";
import { useSetUser, useUser } from "../context/UserContext";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await getIpAddress();
      setStatus(res.status);
      setUser(res);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
    };
    getData();
  }, []);

  if (status === "already_visited") {
    return <Navigate to="/youalreadyvisitedthiswebsite" />;
  }

  return (
    <div className="bg-slate-700 min-h-screen w-full">
      <Navbar ipAddress={user?.ipAddress} />
      <Content />
    </div>
  );
}

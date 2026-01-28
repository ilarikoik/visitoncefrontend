import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useSetUser, useUser } from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";
import { resetIpAddress } from "../hooks/ipAddress";
import Input from "../components/Input";

export default function SecondaryPage() {
  const [status, setStatus] = useState();
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const setUser = useSetUser();
  const user = useUser();

  const handleClick = async () => {
    if (!user || !user.user) {
      console.log("No user to reset");
      return;
    }
    console.log("resetting user to visit again");
    await resetIpAddress({ ipAddress: user.user.ipAddress });
    // setUser(null);
    // setStatus(null);
    navigate("/");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // if (text === "i want to visit again")
    if (text === "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [text]);

  return (
    <div className="p-8 min-h-screen w-full bg-slate-700">
      <div className="flex flex-row justify-evenly items-center min-h-screen ">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Error 403</h2>
          <h3 className="text-xl mb-6 text-white">Not authorized</h3>
        </div>
        <Button label={"Try home page."} onClick={handleClickHome}></Button>
      </div>
      <div className="bg-slate-700 w-full flex flex-col justify-center items-center p-5">
        <Input
          label={`Write "i want to visit again"`}
          value={text}
          onChange={onChange}
        ></Input>
        <Button
          label={"Want to visit again."}
          onClick={handleClick}
          disabled={disabled}
          className={`${disabled ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded`}
        ></Button>
      </div>
    </div>
  );
}

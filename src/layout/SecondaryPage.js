import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useUser } from "../context/UserContext";
import { useNavigate, Navigate, useRoutes } from "react-router-dom";
import { resetIpAddress } from "../hooks/ipAddress";
import { getTrivia } from "../hooks/trivia";
import TriviaCard from "../components/TriviaCard";

export default function SecondaryPage() {
  const [trivia, setTrivia] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  useEffect(() => {
    const getData = async () => {
      setTrivia(await getTrivia());
    };
    getData();
  }, []);

  const handleClick = async () => {
    if (!user || !user.user) {
      console.log("No user to reset");
      return;
    }
    console.log("resetting user to visit again");
    await resetIpAddress({ ipAddress: user.user.ipAddress });
    navigate("/");
  };

  const allcorrect = trivia.every((item) =>
    item.userAnswer
      ? item.userAnswer.toLowerCase() === item.answer.toLowerCase()
      : false,
  );

  return (
    <div className="p-8 min-h-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="flex flex-row justify-evenly items-center h-60 ">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Error 403</h2>
          <h3 className="text-xl mb-6 text-white">Not authorized</h3>
        </div>
        {/* <Button label={"Try home page."} onClick={handleClickHome}></Button> */}
      </div>
      {!user.user.rickRolled && (
        <div className="bg-neutral-900 w-4/5 flex flex-col justify-center items-center p-5 rounded-xl ">
          <div>
            <h3 className="text-xl mb-6 text-white">
              Answer these trivia questions so you can visit once more but thats
              it.
            </h3>
          </div>
          <div className="w-2/5  p-5 rounded-lg mb-6">
            {trivia.map((item, index) => (
              <div key={index} className="mb-4">
                {/* <h4 className="text-white mb-2">{item.question}</h4> */}
                <TriviaCard
                  question={item.question}
                  correctAnswer={item.answer}
                  userAnswer={item.userAnswer || ""}
                  onChange={(e) => {
                    const newTrivia = [...trivia];
                    newTrivia[index].userAnswer = e.target.value;
                    setTrivia(newTrivia);
                    console.log(newTrivia);
                  }}
                />
              </div>
            ))}
          </div>

          {/* <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
          {" "}
          homwewe
          </button> */}
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {" "}
            hoeeee
          </button>

          <Button
            label={"Want to visit again."}
            onClick={() => navigate("/rickroll")}
            allCorrect={!allcorrect}
            className={`${allcorrect ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded`}
          ></Button>
        </div>
      )}
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {" "}
        hoeeee
      </button>
    </div>
  );
}

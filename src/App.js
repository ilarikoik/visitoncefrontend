import { Routes, Route } from "react-router-dom";
import SecondaryPage from "./layout/SecondaryPage";
import HomePage from "./layout/HomePage";
import MainLayout from "./layout/MainLayout";
import RickRoll from "./layout/RickRoll";

export default function App() {
  return (
    <Routes>
      {/* <Route element={<MainLayout />}> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/youalreadyvisitedthiswebsite" element={<SecondaryPage />} />
      <Route path="/rickroll" element={<RickRoll />} />
      {/* </Route> */}
    </Routes>
  );
}

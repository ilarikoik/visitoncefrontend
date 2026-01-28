import { Routes, Route } from "react-router-dom";
import SecondaryPage from "./layout/SecondaryPage";
import HomePage from "./layout/HomePage";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <Routes>
      {/* <Route element={<MainLayout />}> */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/youalreadyvisitedthiswebsite" element={<SecondaryPage />} />
      {/* </Route> */}
    </Routes>
  );
}

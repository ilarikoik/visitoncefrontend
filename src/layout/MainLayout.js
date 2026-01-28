// src/layout/MainLayout.js
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-slate-700"></div>
        <Outlet /> {/* tänne renderöityvät kaikki Routes */}
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/welcome";
import Sidebar from "../component/Sidebar";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Sidebar />} />
    </Routes>
  );
}

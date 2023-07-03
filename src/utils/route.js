import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/welcome";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
}

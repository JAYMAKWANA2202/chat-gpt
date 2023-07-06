import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/welcome";
import ChatPage from "../pages/chatPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<WelcomePage />} />
      <Route path="/" element={<ChatPage />} />
    </Routes>
  );
}

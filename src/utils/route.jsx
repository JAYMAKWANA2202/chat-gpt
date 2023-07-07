import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import ChatPage from "../pages/ChatPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LogInPage";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute auth={{ isAuthenticated: true }}>
            <ChatPage />
          </PrivateRoute>
        }
      />
      <Route path="/home" element={<ChatPage />} />
    </Routes>
  );
}

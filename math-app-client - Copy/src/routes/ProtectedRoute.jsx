import Home from "../components/Home";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoutes = () => {
  const { session } = useAuth();
  return session.token !== null ? <Outlet /> : <Home />;
};

export default ProtectedRoutes;

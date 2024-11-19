
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

function SessionlessRoutes() {
  const { session } = useAuth();

  return session.token !== null ? <Navigate to='/' /> : <Outlet />;
}

SessionlessRoutes.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SessionlessRoutes;

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/user-context";

const Authrization: React.FC<{ allowedRoles: string[] }> = ({
  allowedRoles,
}) => {
  const location = useLocation();
  const userCtx = useContext(userContext);
  const role = userCtx.role;
  const correctRole = allowedRoles.includes(role);
  return correctRole ? (
    <Outlet />
  ) : (
    <Navigate to="/home/unauthorized" state={{ from: location }} replace />
  );
};

export default Authrization;

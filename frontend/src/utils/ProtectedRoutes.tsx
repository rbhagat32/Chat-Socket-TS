import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  children?: JSX.Element;
  isLoggedIn: boolean;
  redirect: string;
}

const ProtectedRoutes = ({
  children,
  isLoggedIn,
  redirect,
}: ProtectedRoutesProps) => {
  if (!isLoggedIn) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;

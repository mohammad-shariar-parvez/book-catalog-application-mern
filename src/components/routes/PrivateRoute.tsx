/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user?.email && !accessToken) {
      localStorage.setItem("redirectPath", pathname);
    }
  }, [user, accessToken, pathname]);

  if (!user?.email && !accessToken) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  const redirectPath = localStorage.getItem("redirectPath");
  if (redirectPath) {
    localStorage.removeItem("redirectPath");
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

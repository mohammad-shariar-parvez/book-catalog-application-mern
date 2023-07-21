/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (!user?.email && !accessToken) {
    return <Navigate to="/login" replace state={{ from: pathname }} />;
  }

  return children;
}

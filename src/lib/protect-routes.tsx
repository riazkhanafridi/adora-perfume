import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TUser } from "../api/adminLogin/feature";

const RedirectAfterInterval = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000); // Redirect after 2 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return <p>You are not logged in</p>;
};

type TProtectRouterProps = { children: ReactNode };

const ProtectRoutes = ({ children }: TProtectRouterProps) => {
  const localToken = localStorage.getItem("token");

  return <div>{localToken ? children : <RedirectAfterInterval />}</div>;
};

export const ProtectAdminRoutes = ({ children }: TProtectRouterProps) => {
  const localToken = localStorage.getItem("token");
  const user: TUser = JSON.parse(localStorage.getItem("user") as string);


  return (
    <div>
      {localToken && user?.role === "ADMIN" ? (
        children
      ) : (
        <RedirectAfterInterval />
      )}
    </div>
  );
};

export default ProtectRoutes;

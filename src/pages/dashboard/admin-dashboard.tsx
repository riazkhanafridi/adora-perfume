import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./-components/side-bar";

function Dashboard() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="flex">
      <Sidebar />
      {isDashboard && <MyDashboard />}
      <Outlet />
    </div>
  );
}

const MyDashboard = () => {
  return (
    <>
      <p>dashboard page</p>
      <p>dashboard contents</p>
    </>
  );
};

export default Dashboard;

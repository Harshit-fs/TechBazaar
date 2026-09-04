import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
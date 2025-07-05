import { Outlet } from "react-router-dom";
import "./DefaultLayout.less";

const Layout = () => {
  return (
    <div className="container">
      <div className="header">{/* <nav>Navigation Menu</nav> */}</div>

      <main>
        <Outlet /> {/* This renders the child route components */}
      </main>
      {/* <footer>My Footer</footer> */}
    </div>
  );
};

export default Layout;

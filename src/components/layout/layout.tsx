import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "./layout.scss";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import React from 'react';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    // Allows for consistent features, <Navbar/> could go here, however in index works fine as well
    <Outlet />
  );
}

export default Layout;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserPlus, FaUsers, FaEdit } from "react-icons/fa";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 shadow-lg transform transition-transform duration-300 ${
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      } w-64`}
    >
      <div className="py-[18px] text-center font-bold text-lg bg-gray-900">
        Admin Dashboard
      </div>
      <nav className="flex flex-col p-4 space-y-3">
        <NavLink
          to="/"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          activeClassName="bg-gray-700"
        >
          <FaUsers />
          User List
        </NavLink>
        <NavLink
          to="/add-user"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          activeClassName="bg-gray-700"
        >
          <FaUserPlus />
          Add User
        </NavLink>
        
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { FaBars } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-900 flex w-full justify-between items-center shadow-md px-4 py-2">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <FaBars
          className="text-gray-300 text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-white">Welcome Back!</h1>
        <p className="text-sm text-white">Hello, Good to see you!</p>
        </div>
        
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
        <div className="text-left">
          <p className="text-sm font-medium text-white">John Doe</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} />
        <div
          className={`flex-grow transition-all duration-300 ${
            isCollapsed ? "ml-0" : "ml-64"
          }`}
        >
          <Header toggleSidebar={toggleSidebar} />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add-user" element={<AddUserPage />} />
              <Route path="/edit-user/:id" element={<EditUserPage />} />
            </Routes>
          </main>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;

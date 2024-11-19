import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import EditUserPage from "./components/EditUserPage";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
              <Route path="/add-user" element={<AddUserForm />} />
              <Route path="/edit-user/:id" element={<EditUserPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

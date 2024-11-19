
import React, { useEffect, useState } from "react";
import { fetchUsers,deleteUser } from "../api";
import { Link } from "react-router-dom";
const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen p-4">
      {/* Header Section */}
      <div className="px-6 py-4 flex flex-row justify-between items-center bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-semibold text-gray-800">User List</h1>
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-300 rounded-lg py-2 px-4 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link to='/add-user'><button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
          type="button"
        >
          Add User
        </button></Link>


      </div>

      {/* User List Section */}
      <ul className="mt-6 space-y-4 bg-white shadow-md ">
        {users.map((user) => (
          <li
            key={user._id}
            className="flex justify-between items-center p-4"
          >
            <div className="flex gap-4 items-center">
              
              <span className="text-sm font-medium text-gray-800">
                {user.firstName}
              </span>
              <span className="text-sm font-medium text-gray-800">
                {user.lastName}
              </span>
              <span className="text-sm text-gray-600">{user.email}</span>
              <span className="text-sm text-gray-500">{user.department}</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-sm bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition-all"
              >
                 <Link to={`/edit-user/${user._id}`}>Edit</Link>
              </button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

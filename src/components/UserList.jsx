import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../api";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setLoading(true);
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
      toast.success("User deleted successfully!");
    } catch {
      toast.error("Failed to delete user");
      alert("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="flex flex-col bg-gray-50 min-h-screen p-4">
        {/* Header Section */}
        <div className="px-6 py-4 flex flex-row justify-between items-center bg-white shadow-md rounded-lg">
          <h1 className="text-xl font-semibold text-gray-800">User List</h1>
          <input
            type="search"
            placeholder="Search by name, email, or department"
            className="border border-gray-300 rounded-lg py-2 px-4 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          />
          <Link to="/add-user">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
              type="button"
            >
              Add User
            </button>
          </Link>
        </div>

        {/* User Table Section */}
        <div className="mt-6 bg-white shadow-md rounded-lg overflow-x-auto">
          {filteredUsers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No results found</div> // Display message if no results
          ) : (
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 border-b">Id</th>
                  <th className="px-4 py-2 text-left text-gray-600 border-b">First Name</th>
                  <th className="px-4 py-2 text-left text-gray-600 border-b">Last Name</th>
                  <th className="px-4 py-2 text-left text-gray-600 border-b">Email</th>
                  <th className="px-4 py-2 text-left text-gray-600 border-b">Department</th>
                  <th className="px-4 py-2 text-center text-gray-600 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-800 border-b">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-800 border-b">{user.firstName}</td>
                    <td className="px-4 py-2 text-gray-800 border-b">{user.lastName}</td>
                    <td className="px-4 py-2 text-gray-600 border-b">{user.email}</td>
                    <td className="px-4 py-2 text-gray-500 border-b">{user.department}</td>
                    <td className="px-4 py-2 text-center border-b">
                      <div className="flex justify-center items-center gap-6">
                        <Link
                          to={`/edit-user/${user._id}`}
                          className="text-yellow-500 hover:text-yellow-600"
                        >
                          <FaEdit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;

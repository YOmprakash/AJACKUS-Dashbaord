import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers, updateUser } from "../api";
import UserForm from "./UserForm";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        const user = users.find((u) => u._id === id);
        setUserData(user);
      })
      .catch(() => alert("Failed to fetch user details"));
  }, [id]);

  const handleUpdateUser = async (data) => {
    try {
      await updateUser(id, data);
      navigate("/");
    } catch {
      alert("Failed to update user");
    }
  };

  return userData ? (
    <UserForm initialData={userData} onSubmit={handleUpdateUser} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditUserPage;

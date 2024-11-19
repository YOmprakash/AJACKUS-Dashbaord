import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers, updateUser } from "../api";
import UserForm from "../components/UserForm";
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        const user = users.find((u) => u._id === id);
        setUserData(user);
      })
      .catch(() => alert("Failed to fetch user details"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleUpdateUser = async (data) => {
    setLoading(true);
    try {
      await updateUser(id, data);
      toast.success("User updated successfully!");
      navigate("/",);
    } catch {
      toast.error("Failed to update user");

    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : userData ? (
    <UserForm initialData={userData} onSubmit={handleUpdateUser} />
  ) : (
    <p>User not found</p>
  );

};

export default EditUserPage;

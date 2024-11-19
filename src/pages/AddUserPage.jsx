import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api";
import UserForm from "../components/UserForm";
import Spinner from "../components/Spinner";

const AddUserPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddUser = async (userData) => {
    setLoading(true);
    try {
      await addUser(userData);
      navigate("/");
    } catch {
      alert("Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return loading ? <Spinner /> : <UserForm onSubmit={handleAddUser} />;
};

export default AddUserPage;

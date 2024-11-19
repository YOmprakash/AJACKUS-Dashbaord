import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api";
import UserForm from "../components/UserForm";
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify'; 

const AddUserPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddUser = async (userData) => {
    setLoading(true);
    try {
      await addUser(userData);
      toast.success("User added successfully!"); 
      navigate("/");

    } catch {
      toast.error("Failed to add user");
     
    } finally {
      setLoading(false);
    }
  };

  return loading ? <Spinner /> : <UserForm onSubmit={handleAddUser} />;
};

export default AddUserPage;

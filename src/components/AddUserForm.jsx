import { useNavigate } from "react-router-dom";
import { addUser } from "../api";
import UserForm from "../components/UserForm";

const AddUserForm = () => {
  const navigate = useNavigate();

  const handleAddUser = async (userData) => {
    try {
      await addUser(userData);
      navigate("/");
    } catch {
      alert("Failed to add user");
    }
  };

  return <UserForm onSubmit={handleAddUser} />;
};

export default AddUserForm;

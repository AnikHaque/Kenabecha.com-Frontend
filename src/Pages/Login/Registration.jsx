import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with OTP
      const otpResult = await axios.post(
        "http://localhost:5000/register",
        userData
      );
      if (otpResult.data.status !== "success") {
        setMessage("Failed to register user. Please try again.");
        return;
      }

      // If OTP sent successfully, navigate to OTP verification page
      navigate("/verify-otp"); // Navigate to OTP verification page

      // No need to handle OTP verification here, it will be handled in the OTP verification page
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleRegister}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Registration;

import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      if (response.data.status === "success") {
        // Set token in localStorage
        localStorage.setItem("token", response.data.token);

        // Decode token to retrieve user information
        const decodedToken = jwtDecode(response.data.token);
        const { email, user_id, role } = decodedToken; // Extract user information from the decoded token

        // Store user information in localStorage
        localStorage.setItem("user", JSON.stringify({ email, user_id, role }));

        // Set token as a cookie
        document.cookie = `token=${response.data.token}; path=/; SameSite=Strict`;

        // Redirect user to dashboard or home page upon successful login
        window.location.href = "/";
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const verifyResult = await axios.post(
        "http://localhost:5000/verifyOtp",
        formData
      );
      if (verifyResult.data.status === "success") {
        // Redirect to success page or dashboard upon successful OTP verification
        navigate("/");
      } else {
        setMessage("Invalid OTP or password. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleVerifyOTP}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required // Make email field required
          />
        </label>
        <label>
          OTP:
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleInputChange}
            required // Make OTP field required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required // Make password field required
          />
        </label>
        <button type="submit">Verify OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default VerifyOtp;

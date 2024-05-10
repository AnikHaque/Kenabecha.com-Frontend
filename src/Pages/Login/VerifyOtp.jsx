import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./VerifyOtp.css";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [formData, setFormData] = useState({
    otp: ["", "", "", "", "", ""],
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedOtp = [...formData.otp];
    updatedOtp[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      otp: updatedOtp,
    }));
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const otp = formData.otp.join("");
      const verifyResult = await axios.post("http://localhost:5000/verifyOtp", {
        email,
        otp,
      });
      if (verifyResult.data.status === "success") {
        navigate("/");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <form onSubmit={handleVerifyOTP}>
        <div className="otp-input-container">
          {formData.otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              className="otp-input"
              required
            />
          ))}
        </div>
        <button type="submit" className="verify-btn">
          Verify OTP
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default VerifyOtp;

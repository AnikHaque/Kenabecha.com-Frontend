import { decodeToken } from "../../Utility/Token";
import axios from "axios";

const AddToCart = async (
  product,
  quantity,
  selectedSize,
  selectedColor,
  setError
) => {
  try {
    // Get token from localStorage or cookie
    const token =
      localStorage.getItem("token") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    // Check if token exists
    if (!token) {
      setError("User not authenticated");
      return;
    }

    // Decode token to check validity
    const decoded = decodeToken(token);
    if (!decoded) {
      setError("Failed to decode token");
      return;
    }

    // Send request to add product to cart
    const response = await axios.post(
      "http://localhost:5000/SaveCartList",
      {
        productId: product._id,
        quantity,
        size: selectedSize,
        color: selectedColor,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Product added to cart:", response.data);
    // Handle success, maybe show a success message
  } catch (error) {
    console.error("Error adding product to cart:", error);
    setError("Failed to add product to cart");
    // Handle error, maybe show an error message
  }
};

export default AddToCart;

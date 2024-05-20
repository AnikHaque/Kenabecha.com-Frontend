import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/ProductDetails/${productId}`
        );
        setProduct(response.data.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
        setError("Failed to fetch product details");
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    try {
      const token =
        localStorage.getItem("token") ||
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];
      console.log("Token:", token); // Add this line to check the token value
      if (!token) {
        setError("User not authenticated");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/SaveCartList",
        {
          productID: product._id,
          color: selectedColor,
          qty: quantity,
          size: selectedSize,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Handle response
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("Failed to add product to cart");
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="text-gray-700">{product.description}</p>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Size
            </label>
            <input
              type="text"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              value={selectedColor}
              onChange={handleColorChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={addToCart}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md focus:outline-none hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

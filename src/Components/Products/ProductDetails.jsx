import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/ProductDetails/${productId}`
        );
        console.log(response.data.data[0]);
        setProduct(response.data.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : product ? (
        <div>
          <h2>Hello{product._id}</h2>
          <p>{product.description}</p>
          {/* Display other product details */}
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductDetails;

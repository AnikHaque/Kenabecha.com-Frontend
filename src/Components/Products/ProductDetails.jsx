import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Productproduct = () => {
  // const { productId } = useParams();
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProductproduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/Productproduct/${productId}`
  //       );
  //       console.log(response.data.data[0]);
  //       setProduct(response.data.data[0]);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching product product:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProductproduct();
  // }, [productId]);
  const [activeTab, setActiveTab] = useState("Speci-tab-pane");
  const [quantity, setQuantity] = useState(1);
  const [CartForm, setCartForm] = useState({ size: "", color: "" });

  const CartFormChange = (key, value) => {
    setCartForm({ ...CartForm, [key]: value });
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const AddCart = () => {
    // Dummy function
    console.log("Adding to cart...");
  };

  const AddWish = () => {
    // Dummy function
    console.log("Adding to wishlist...");
  };

  // Dummy product details
  const dummyProduct = {
    title: "Awesome Product",
    category: { categoryName: "Electronics" },
    brand: { brandName: "AwesomeBrand" },
    shortDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 99.99,
    discount: true,
    discountPrice: 79.99,
    details: {
      size: "Small, Medium, Large",
      color: "Red, Blue, Green",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lectus non nisi euismod vehicula.",
    },
  };

  // Dummy reviews
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 4,
      comment: "Great product, highly recommended!",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 5,
      comment: "Excellent quality, fast delivery!",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Product"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
          <div className="flex space-x-2">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Product"
              className="w-1/3 rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/500x500"
              alt="Product"
              className="w-1/3 rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/500x500"
              alt="Product"
              className="w-1/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-2xl font-semibold">{dummyProduct.title}</h4>
          <p className="text-sm text-gray-600">
            Category: {dummyProduct.category.categoryName}
          </p>
          <p className="text-sm text-gray-600">
            Brand: {dummyProduct.brand.brandName}
          </p>
          <p className="text-base my-2">{dummyProduct.shortDes}</p>
          {dummyProduct.discount ? (
            <p className="text-lg font-semibold">
              Price:{" "}
              <span className="line-through text-gray-600">
                {dummyProduct.price}
              </span>{" "}
              {dummyProduct.discountPrice}{" "}
            </p>
          ) : (
            <p className="text-lg font-semibold">Price: {dummyProduct.price}</p>
          )}
          <div className="flex my-4">
            <div className="w-1/3 pr-2">
              <label className="text-sm">Size</label>
              <select
                value={CartForm.size}
                onChange={(e) => {
                  CartFormChange("size", e.target.value);
                }}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              >
                <option value="">Size</option>
                {dummyProduct.details.size.split(",").map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3 pr-2">
              <label className="text-sm">Color</label>
              <select
                value={CartForm.color}
                onChange={(e) => {
                  CartFormChange("color", e.target.value);
                }}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              >
                <option value="">Color</option>
                {dummyProduct.details.color.split(",").map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">
              <label className="text-sm">Quantity</label>
              <div className="flex items-center mt-1">
                <button
                  onClick={decrementQuantity}
                  className="px-2 py-1 bg-gray-200 rounded-full focus:outline-none"
                >
                  -
                </button>
                <input
                  value={quantity}
                  type="text"
                  className="w-10 text-center border border-gray-300 rounded mx-2"
                  readOnly
                />
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 bg-gray-200 rounded-full focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={AddCart}
              className="w-full py-2 mr-2 bg-green-500 text-white font-semibold rounded focus:outline-none hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={AddWish}
              className="w-full py-2 bg-green-500 text-white font-semibold rounded focus:outline-none hover:bg-green-600"
            >
              Add to Wish
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex space-x-4">
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === "Speci-tab-pane"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabClick("Speci-tab-pane")}
          >
            Specification
          </button>
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === "Review-tab-pane"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabClick("Review-tab-pane")}
          >
            Review
          </button>
        </div>
        {activeTab === "Speci-tab-pane" && (
          <div className="mt-4">
            <h5 className="mt-4 mb-2 font-semibold">Specifications</h5>
            <p>{dummyProduct.details.des}</p>
          </div>
        )}
        {activeTab === "Review-tab-pane" && (
          <div className="mt-4">
            <h5 className="mt-4 mb-2 font-semibold">Reviews</h5>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="mb-4 border-b border-gray-300 pb-4"
              >
                <p>
                  <strong>{review.user}</strong>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Rating: {review.rating}
                </p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Productproduct;

import React, { useState } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("Speci-tab-pane");
  const [quantity, setQuantity] = useState(1);
  const [CartForm, setCartForm] = useState({ size: "", color: "" });
  const [selectedImage, setSelectedImage] = useState(0); // Track the selected image

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
    img1: "https://photo.teamrabbil.com/images/2023/10/08/7.jpeg",
    img2: "https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg",
    img3: "https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg",

    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    color: ["Red", "Black", "Blue"],
    size: ["13", "14", "17"],
    productID: "654dbf25abda0c85053c9902",
    createdAt: "2023-09-20T17:17:56.893Z",
    updatedAt: "2023-09-20T17:17:56.893Z",
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={dummyProduct[`img${selectedImage + 1}`]} // Use the selected image
            alt="Product"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
          <div className="flex space-x-2">
            {[...Array(8)].map((_, index) => (
              <img
                key={index}
                src={dummyProduct[`img${index + 1}`]}
                alt="Product"
                className={`w-1/3 rounded-lg shadow-lg cursor-pointer ${
                  index === selectedImage ? "opacity-50" : ""
                }`}
                onClick={() => setSelectedImage(index)} // Set the selected image
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-2xl font-semibold">Product Title</h4>
          <p className="text-base my-2">{dummyProduct.des}</p>
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
                {dummyProduct.size.map((item, i) => (
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
                {dummyProduct.color.map((item, i) => (
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
              className="w-full py-2 mr-2 bg-blue-500 text-white font-semibold rounded focus:outline-none hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={AddWish}
              className="w-full py-2 bg-orange-500 text-white font-semibold rounded focus:outline-none hover:bg-green-600"
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
            <p>Product specifications here</p>
          </div>
        )}
        {activeTab === "Review-tab-pane" && (
          <div className="mt-4">
            <h5 className="mt-4 mb-2 font-semibold">Reviews</h5>
            <p>Product reviews here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

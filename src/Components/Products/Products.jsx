import { Link } from "react-router-dom";
import { useState } from "react";
import { useListByRemarkQuery } from "../../features/products/productsApi";

const Products = () => {
  const [remark, setRemark] = useState("New"); // Capitalized 'N'

  // Fetch products based on the selected remark
  const { data, isLoading } = useListByRemarkQuery(remark);
  console.log(data?.data);

  // Function to handle button click and update the remark state
  const handleRemarkChange = (newRemark) => {
    setRemark(newRemark);
  };

  return (
    <div className="section">
      <div className="container py-5 bg-white">
        {/* Display the current remark on the top right corner */}

        <div className="flex justify-center">
          {/* Buttons for different remarks */}
          <div className="flex space-x-4">
            <button
              onClick={() => handleRemarkChange("New")}
              className={`btn ${remark === "New" ? "btn-active" : ""} ${
                remark === "New" ? "bg-blue-500 p-3" : ""
              }`}
            >
              New
            </button>
            <button
              onClick={() => handleRemarkChange("popular")}
              className={`btn ${remark === "popular" ? "btn-active" : ""} ${
                remark === "popular" ? "bg-blue-500 p-3" : ""
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => handleRemarkChange("trending")}
              className={`btn ${remark === "trending" ? "btn-active" : ""} ${
                remark === "trending" ? "bg-blue-500 p-3" : ""
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => handleRemarkChange("Top")}
              className={`btn ${remark === "Top" ? "btn-active" : ""} ${
                remark === "Top" ? "bg-blue-500 p-3" : ""
              }`}
            >
              Top
            </button>
            <button
              onClick={() => handleRemarkChange("Special")}
              className={`btn ${remark === "Special" ? "btn-active" : ""} ${
                remark === "Special" ? "bg-blue-500 p-3" : ""
              }`}
            >
              Special
            </button>
          </div>
        </div>

        {/* Display products based on the selected remark */}
        <div className="grid grid-cols-4 gap-4 mt-8 ml-20">
          {isLoading ? (
            <h1 className="text-center col-span-4">Loading.....</h1>
          ) : (
            data?.data?.map((item, i) => (
              <div key={i} className="col-span-1 md:col-span-1 lg:col-span-1 ">
                <Link to={`/details/${item["_id"]}`} className="block">
                  <div className="card shadow-sm rounded-lg bg-white">
                    <img
                      className="w-full rounded-t-lg"
                      src={item["image"]}
                      alt={item["title"]}
                    />
                    <div className="p-4">
                      <p className="text-sm text-secondary my-1">
                        {item["title"]}
                      </p>
                      {item["discount"] ? (
                        <p className="text-md text-dark my-1">
                          Price:
                          <span className="line-through">
                            {" "}
                            ${item["price"]}
                          </span>
                          ${item["discountPrice"]}
                        </p>
                      ) : (
                        <p className="text-md text-dark my-1">
                          Price: ${item["price"]}
                        </p>
                      )}
                      <button className="bg-blue-500 text-white p-2 pl-4 pr-4 rounded-md">
                        <Link
                          to={`/details/${item["_id"]}`}
                          className="btn btn-blue"
                        >
                          View Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

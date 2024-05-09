import React, { useEffect, useState } from "react";
import {
  useGetBrandListQuery,
  useGetCategoryListQuery,
  useGetListByFilterQuery,
} from "../../features/products/productsApi";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data: brandList = [] } = useGetBrandListQuery();
  const { data: categoryList = [] } = useGetCategoryListQuery();
  const [filter, setFilter] = useState({
    brandID: "",
    categoryID: "",
    priceMax: "",
    priceMin: "",
  });
  const {
    data: listProduct = [],
    isLoading: productListLoading,
    refetch: refetchListByFilter,
  } = useGetListByFilterQuery(filter);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("asc");

  const inputOnChange = async (name, value) => {
    setFilter((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    refetchListByFilter();
  }, [filter, refetchListByFilter]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const renderProducts = () => {
    let products = [...(listProduct.data || [])]; // Create a copy of the products array
    if (!products) return null;

    if (sortOrder === "asc") {
      products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else {
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (viewMode === "grid") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item._id} className="bg-white shadow-sm rounded-lg">
              <Link to={`/details/${item._id}`}>
                <img className="w-full" src={item.image} alt={item.title} />
                <div className="p-4">
                  <p className="text-base text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-800 mb-1">
                    {item.discount
                      ? `Price: ${item.price} Discounted Price: ${item.discountPrice}`
                      : `Price: ${item.price}`}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {products.map((item) => (
            <div key={item._id} className="bg-white shadow-sm rounded-lg mb-4">
              <Link to={`/details/${item._id}`} className="flex items-center">
                <img className="w-1/4" src={item.image} alt={item.title} />
                <div className="p-4 w-3/4">
                  <p className="text-base text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-800 mb-1">
                    {item.discount
                      ? `Price: ${item.price} Discounted Price: ${item.discountPrice}`
                      : `Price: ${item.price}`}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className=" mt-2 ml-4 mr-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1">
          <div className="p-3 bg-white shadow-sm rounded-lg">
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Brands
            </label>
            <select
              value={filter.brandID}
              onChange={(e) => inputOnChange("brandID", e.target.value)}
              className="form-select w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Choose Brand</option>
              {brandList.data &&
                brandList.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.brandName}
                  </option>
                ))}
            </select>
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Categories
            </label>
            <select
              value={filter.categoryID}
              onChange={(e) => inputOnChange("categoryID", e.target.value)}
              className="form-select w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Choose Category</option>
              {categoryList.data &&
                categoryList.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.categoryName}
                  </option>
                ))}
            </select>
            <div className=" bg-white shadow-sm rounded-lg ">
              <label className="block text-gray-700 text-sm font-bold mb-3">
                Sort Order
              </label>
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="form-select w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Maximum Price ${filter.priceMax}
            </label>
            <input
              value={filter.priceMax}
              onChange={(e) => inputOnChange("priceMax", e.target.value)}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mb-3 w-3/4"
            />
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Minimum Price ${filter.priceMin}
            </label>
            <input
              value={filter.priceMin}
              onChange={(e) => inputOnChange("priceMin", e.target.value)}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mb-3 w-3/4"
            />
          </div>
          <div className="p-3 bg-white shadow-sm rounded-lg mt-4">
            <button
              className={`mr-2 px-4 py-2 rounded-lg focus:outline-none ${
                viewMode === "grid" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={toggleViewMode}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 rounded-lg focus:outline-none ${
                viewMode === "list" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={toggleViewMode}
            >
              List View
            </button>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default ProductList;

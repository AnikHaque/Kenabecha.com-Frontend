import { useEffect, useState } from "react";
import {
  useGetBrandListQuery,
  useGetCategoryListQuery,
  useGetListByFilterQuery,
} from "../../features/products/productsApi";

import { Link } from "react-router-dom";

const ProductList = () => {
  const { data: brandList = [], isLoading: brandLoading } =
    useGetBrandListQuery();

  const { data: categoryList = [], isLoading: categoryLoading } =
    useGetCategoryListQuery();
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
  console.log(listProduct.data);

  const inputOnChange = async (name, value) => {
    setFilter((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    refetchListByFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="container mt-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1">
          <div className="p-3 bg-white shadow-sm rounded-lg">
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Brands
            </label>
            <select
              value={filter.brandID}
              onChange={async (e) => {
                await inputOnChange("brandID", e.target.value);
              }}
              className="form-select w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Choose Brand</option>
              {brandList?.data?.map((item) => (
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
              onChange={async (e) => {
                await inputOnChange("categoryID", e.target.value);
              }}
              className="form-select w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Choose Category</option>
              {categoryList?.data?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Maximum Price ${filter.priceMax}
            </label>
            <input
              value={filter.priceMax}
              onChange={async (e) => {
                await inputOnChange("priceMax", e.target.value);
              }}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mb-3"
            />
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Minimum Price ${filter.priceMin}
            </label>
            <input
              value={filter.priceMin}
              onChange={async (e) => {
                await inputOnChange("priceMin", e.target.value);
              }}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mb-3"
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productListLoading ? (
              <h1>Loading.....</h1>
            ) : (
              listProduct?.data?.map((item) => {
                const price = item.discount ? (
                  <p className="text-sm text-gray-800 mb-1">
                    Price:{" "}
                    <strike className="text-red-500">${item.price}</strike> $
                    {item.discountPrice}
                  </p>
                ) : (
                  <p className="text-sm text-gray-800 mb-1">
                    Price: ${item.price}
                  </p>
                );
                return (
                  <div
                    key={item._id}
                    className="bg-white shadow-sm rounded-lg overflow-hidden"
                  >
                    <Link to={`/details/${item._id}`}>
                      <img
                        className="w-full"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="p-4">
                        <p className="text-base text-gray-900 mb-1">
                          {item.title}
                        </p>
                        {price}
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

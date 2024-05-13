import { apiSlice } from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrandList: builder.query({
      query: () => "/brands",
    }),
    getCategoryList: builder.query({
      query: () => "/categories",
    }),
    getSliderList: builder.query({
      query: () => "/ProductSliderList",
    }),
    getListByRemark: builder.query({
      query: (Remark) => `/productsByRemark/${Remark}`,
    }),
    getListByBrand: builder.query({
      query: (BrandID) => `/ProductListByBrand/${BrandID}`,
    }),
    getListByCategory: builder.query({
      query: (CategoryID) => `/ProductListByCategory/${CategoryID}`,
    }),
    getListByKeyword: builder.query({
      query: (Keyword) => `/ProductListByKeyword/${Keyword}`,
    }),
    getListByFilter: builder.query({
      query: (postBody) => ({
        url: `/ProductListByFilter`,
        method: "POST",
        body: postBody,
      }),
    }),
    getProductDetails: builder.query({
      query: (ProductID) => `/ProductDetails/${ProductID}`,
    }),
    getReviewList: builder.query({
      query: (id) => `/ProductReviewList/${id}`,
    }),
  }),
});

export const {
  useGetBrandListQuery,
  useGetCategoryListQuery,
  useGetListByBrandQuery,
  useGetListByCategoryQuery,
  useGetListByFilterQuery,
  useGetListByKeywordQuery,
  useGetListByRemarkQuery,
  useGetProductDetailsQuery,
  useGetReviewListQuery,
  useGetSliderListQuery,
} = productsApi;

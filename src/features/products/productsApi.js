import { apiSlice } from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listByRemark: builder.query({
      query: (Remark) => `/productsByRemark/${Remark}`,
    }),
  }),
});

export const { useListByRemarkQuery } = productsApi;

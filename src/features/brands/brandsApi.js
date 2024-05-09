import { apiSlice } from "../api/apiSlice";

const brandsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    brandsGet: builder.query({
      query: () => ({
        url: "/brands",
      }),
    }),
  }),
});

export const { useBrandsGetQuery } = brandsApi;

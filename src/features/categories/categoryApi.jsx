import { apiSlice } from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    categoryGet: builder.query({
      // note: an optional `queryFn` may be used in place of `query`
      query: () => ({
        url: "/categories",
      }),
    }),
  }),
});

export const { useCategoryGetQuery } = categoryApi;

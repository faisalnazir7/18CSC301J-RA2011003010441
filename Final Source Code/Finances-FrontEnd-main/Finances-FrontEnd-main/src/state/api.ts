// this is Redux Toolkit Qery file
import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({  // createApi is a function of redux toolkit query
    baseQuery: fetchBaseQuery({ baseUrl: "https://financebackend-8onb.onrender.com" }), // baseurl is in .env.local file
    reducerPath: "main",
    tagTypes: ["Kpis","Products","Transactions"], // used to save information like kpis and Products
    endpoints: (build) => ({ // this is where we actually create API calls
        getKpis: build.query<Array<GetKpisResponse>, void>({ // we are using this endpoint "getKpis" and we are making a call using the above baseURL and we make the API call to "kpi/kpis/". This will setup a function that will grab our kpis(key performance indicators) and we will be saving it into "kpis" tag.
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
          }),
        getProducts: build.query<Array<GetProductsResponse>, void>({ // the <GetProductsResponse> is what we get from types.ts file
            query: () => "product/products/",
            providesTags: ["Products"],
          }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({ // the <GetProductsResponse> is what we get from types.ts file
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"],
          }),
    }),
})

export const {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;

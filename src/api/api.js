import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => "/books/" + id,
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    userLogin: builder.mutation({
      query: (userData) => ({
        url: "/users/login",
        method: "POST",
        body: userData,
      }),
    }),
    userMe: builder.query({
      query: () => "/users/me",
    }),
    getReservations: builder.query({
      query: () => "/reservations/",
    }),
    deleteReservations: builder.mutation({
      query: (id) => ({
        url: "/reservations/" + id,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useRegisterUserMutation,
  useUserLoginMutation,
  useUserMeQuery,
  useGetReservationsQuery,
  useDeleteReservationsMutation,
} = api;

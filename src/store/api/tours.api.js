import { api } from "./api";

export const toursApi = api.injectEndpoints({
    endpoints: builder => ({
        getTours: builder.query({
            query: () => `/tour/getAll`,
            providesTags: () => [{
                type: "Tours"
            }]
        }),
        getSingleTour: builder.query({
            query: (slug) => `/tour/${slug}`,
            providesTags: () => [{
                type: "Tours"
            }]
        }),
        addTour: builder.mutation({
            query: tour => ({
                body: tour,
                url: '/tour/create',
                method: 'POST'
            }),
            invalidatesTags: [{
                type: 'Tours'
              }]
        }),
        deleteTour: builder.mutation({
            query: id => ({
                url: `/tour/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{
                type: 'Tours'
              }]
        }),
        register: builder.mutation({
            query: register => ({
                body: register,
                url: `/tour/register`,
                method: 'POST'
            }),
        }),
    })
})

export const {useGetToursQuery, useGetSingleTourQuery, useAddTourMutation, useDeleteTourMutation, useRegisterMutation} = toursApi
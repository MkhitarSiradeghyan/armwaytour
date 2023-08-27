import { api } from "./api";

export const slidersApi = api.injectEndpoints({
    endpoints: builder => ({
        getSliders: builder.query({
            query: () => `/slider`,
            providesTags: () => [{
                    type: 'Sliders'
                }]
        }),
        addSlider: builder.mutation({
            query: slider => ({
                body: slider,
                url: '/slider/create',
                method: "POST"
            }),
            invalidatesTags: () => [{
                    type: 'Sliders'
                }]
        }),
        deleteSlider: builder.mutation({
            query: id => ({
                url: `/slider/delete/${id}`,
                method: "DELETE",
            })
        })
    })
})
export const {useGetSlidersQuery, useAddSliderMutation, useDeleteSliderMutation} = slidersApi

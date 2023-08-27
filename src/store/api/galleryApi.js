const { api } = require("./api");

const galleryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: (locale) => `/gallery`,
      providesTags: () => [
        {
          type: "Gallery",
        },
      ],
    }),
    addPhoto: builder.mutation({
      query: (gallery) => ({
        body: gallery,
        url: "/gallery/create",
        method: "POST",
       
      }),
      invalidatesTags: [{
        type: 'Gallery'
      }]
    }),
    addVideo: builder.mutation({
      query: (gallery) => ({
        body: gallery,
        url: "/gallery/create",
        method: "POST",
       
      }),
      invalidatesTags: [{
        type: 'Gallery'
      }]
    }),
    deleteGallery: builder.mutation({
        query: id => ({
            url: `/gallery/delete/${id}`,
            method: 'DELETE'
        })
    })
  }),
});

export const { useGetGalleryQuery, useAddPhotoMutation, useAddVideoMutation, useDeleteGalleryMutation } = galleryApi;

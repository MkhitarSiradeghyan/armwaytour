const { api } = require("./api");

const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: login => ({
                body: login,
                url: '/admin/login',
                method: 'POST'
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/admin/logout',
                method: "GET",
            }),
            
        }),
        changePass: builder.mutation({
            query: pass => ({
                body: pass,
                url: '/admin/change-password',
                method: "POST"
            })
        })
    })
})
export const {useLoginMutation, useLogoutMutation, useChangePassMutation} = authApi

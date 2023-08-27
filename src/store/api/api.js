import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getCookie } from "cookies-next"
import { domainName } from "@/utils/domainName"


const API_URL = domainName
export const api = createApi({ 
    reducerPath: "api",
    tagTypes: ["Sliders", "Tours", "Gallery", "Login"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: headers => {
            headers.set("Authorization", `Bearer ${getCookie('authToken')}`)
            headers.set("Access-Control-Allow-Origin", '*')
            return headers
        }
    }),
    endpoints: builder => ({})
})

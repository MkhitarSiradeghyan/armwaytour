import { domainName } from "./domainName"


export const transformURL = s => {
    return `${domainName}/${s}`
}
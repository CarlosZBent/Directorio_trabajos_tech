import {MIXPANEL_ID, PROD_URL, DEV_URL} from "$env/static/private";
import { redirect, type Actions } from "@sveltejs/kit";

interface DataObject {
    id:string,
    prod_url:string,
    dev_url:string
}

const server_data:DataObject = {
    id:MIXPANEL_ID,
    prod_url: PROD_URL,
    dev_url: DEV_URL
}

export function load(){
    return server_data
}

export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get("theme")

        if (theme) {
            cookies.set("theme", theme, { path: "/", maxAge: 60 * 60 * 24 * 365 })
        }

        throw redirect(302, "/")
    }
}
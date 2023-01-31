import {MIXPANEL_ID, PROD_URL, DEV_URL} from "$env/static/private";

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


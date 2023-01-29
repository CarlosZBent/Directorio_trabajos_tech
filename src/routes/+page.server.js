import { MIXPANEL_ID } from "$env/static/private";

// import mixpanel from 'mixpanel-browser'

const mixpanel_data = {id:MIXPANEL_ID}

export function load(){
    return mixpanel_data
}


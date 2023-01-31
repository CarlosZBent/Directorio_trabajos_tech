import mixpanel from "mixpanel-browser"

function mixpanelWebsiteVisit (node:HTMLElement, id:string) {
    if (node) {
        mixpanel.init(String(id))
        mixpanel.track('Webiste visit')
    }
}

export { mixpanelWebsiteVisit }
<script lang="ts">
    import mixpanel from 'mixpanel-browser';

    import Config from '../platforms.config.json'
    import InfoWidget from './InfoWidget.svelte';
    import {iterateJSONData} from '../helpers.js'
    import Container from './Container.svelte';

    interface MixpanelDataObject {
        id:string
    }

    export let data:MixpanelDataObject;

    let mixpanel_id = data.id

    function mixpanelWebsiteVisit (node:HTMLElement, id:string) {
        if (node) {
            mixpanel.init(String(id))
            mixpanel.track('Webiste visit')
        }
    }

    // an iterable for each of the Config child objects
    let workInfo = iterateJSONData(Config.work)
    let freelancingInfo = iterateJSONData(Config.freelancing)
</script>

<h1 class="text-center mx-auto my-5 text-2xl font-sans" use:mixpanelWebsiteVisit={mixpanel_id} > Directorio de trabajos tech de Gremio Creativo ✍ </h1>
<hr class="border-emerald-400 w-[75%] m-auto" />

<div class="flex flex-wrap justify-evenly mx-auto my-5 w-11/12 md:w-3/4">
    <Container title="Plataformas para trabajo" data={workInfo} />
    <Container title="Plataformas para freelancing" data={freelancingInfo} />
</div>

<div class="infoContainer m-auto w-11/12 md:w-3/4">
    <InfoWidget />
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
    .infoContainer {
        border: 1px #cacaca solid;
        border-radius: 5px;
        margin-top: 5em;
        margin-bottom: 2em;
        padding: 1em;
        background-color: theme(colors.gray.200);
    }
</style>
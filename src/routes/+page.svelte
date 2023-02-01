<script lang="ts">
    import Config from '../platforms.config.json'
    import InfoWidget from './InfoWidget.svelte';
    import {iterateJSONData} from '../helpers.js'
    import { mixpanelWebsiteVisit } from '../analytics';
    import Container from './Container.svelte';
    
    interface MixpanelDataObject {
        id:string
    }
    
    export let data:MixpanelDataObject;
    
    let mixpanel_id = data.id

    // an iterable for each of the Config child objects
    let workInfo = iterateJSONData(Config.work)
    let freelancingInfo = iterateJSONData(Config.freelancing)
</script>

<h1 class="text-center mx-auto mb-5 mt-10 lg:text-5xl md:text-4xl text-3xl font-bold font-[Garet]" use:mixpanelWebsiteVisit={mixpanel_id} > Directorio de trabajos tech </h1>
<h2 class="text-center my-4 font-[Montserrat] text-lg mx-5 text-gray-500 mb-8">¿Quieres trabajar en la industria tech? Tenemos decenas de plataformas para que encuentres tu próximo empleo</h2>

<div class="flex flex-wrap justify-evenly mx-auto my-5 w-11/12 md:w-3/4 gap-2">
    <Container title="Plataformas para trabajo" data={workInfo} amount={workInfo.length} />
    <Container title="Plataformas para freelancing" data={freelancingInfo} amount={freelancingInfo.length} />
</div>

<div class="flex flex-row mx-12"> 
    <InfoWidget />
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
   
</style>
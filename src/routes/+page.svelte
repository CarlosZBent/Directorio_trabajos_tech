<script lang="ts">
import Config from '../platforms.config.json'

import ItemsContainer from './ItemsContainer.svelte';
import Item from './Item.svelte';
import InfoWidget from './InfoWidget.svelte';
import NavWidget from './NavWidget.svelte';

import {iterateJSONData} from '../helpers.js'
import { mixpanelWebsiteVisit } from '../analytics';

export let data;
let mixpanel_id = data.id
let prod_url = data.prod_url
let dev_url = data.dev_url

// an iterable for each of the Config child objects
let workInfo = iterateJSONData(Config.work)
let freelancingInfo = iterateJSONData(Config.freelancing)
</script>

<h1 class="text-center mx-auto mb-5 mt-10 text-4xl font-Cinzel" use:mixpanelWebsiteVisit={mixpanel_id} > Directorio de trabajos tech </h1>
<h2 class="text-center my-4 font-sans text-lg mx-5">¿Quieres trabajar en la industria tech? Tenemos decenas de plataformas para que encuentres tu próximo empleo</h2>
<hr class="border-emerald-400 w-[75%] m-auto" />

<NavWidget url={dev_url} />

<div class="flex flex-wrap justify-evenly mx-auto my-5 w-[75%]">
    <ItemsContainer title='Plataformas para trabajo' >
        {#each workInfo as data}
            <span class="item text-justify w-[90%]">
                <Item
                name={data.name} link={data.link} 
                />
            </span>
            <hr>
        {/each}
    </ItemsContainer>
    <ItemsContainer title='Plataformas para freelancing' >
       {#each freelancingInfo as data}
        <span class="item text-justify w-[90%]">
                <Item
                name={data.name} link={data.link} 
                />
            </span>
            <hr>
        {/each}
    </ItemsContainer>
</div>

<div class="infoContainer m-auto w-[75%]">
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
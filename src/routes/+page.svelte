<script lang="ts">
import Config from '../platforms.config.json'
import Item from './Item.svelte';
import InfoWidget from './InfoWidget.svelte';
import {iterateJSONData} from '../helpers.js'

// an iterable for each of the Config child objects
let workInfo = iterateJSONData(Config.work)
let freelancingInfo = iterateJSONData(Config.freelancing)

</script>

<h1 class="text-center mx-auto my-5 text-2xl font-sans" > Directorio de trabajos tech de Gremio Creativo ✍ </h1>
<hr class="border-emerald-400 w-[75%] m-auto" />

<div class="flex flex-wrap justify-evenly mx-auto my-5 w-[75%]">
    <div class="items-container w-[80%] min-w-fit md:w-[45%] my-2">
       <h2 class="items-container-header"> Plataformas para trabajo </h2>
       <hr class="border-emerald-400 w-[85%] mx-auto my-2">
        {#each workInfo as data}
            <span class="item text-justify w-[90%]">
                <Item
                name={data.name} link={data.link} 
                />
            </span>
            <hr>
        {/each}
    </div>
    <div class="items-container w-[80%] min-w-fit md:w-[45%] my-2">
       <h2 class="items-container-header"> Plataformas para freelancing </h2>
       <hr class="border-emerald-400 w-[85%] mx-auto my-2">
       {#each freelancingInfo as data}
        <span class="item text-justify w-[90%]">
                <Item
                name={data.name} link={data.link} 
                />
            </span>
            <hr>
        {/each}
    </div>
</div>
<div class="infoContainer m-auto w-[75%]">
    <InfoWidget />
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
    .items-container {
        /* max-width: 55%;
        min-width: fit-content; */
        height: fit-content;
        min-height: 80px;
        border: 1px #cacaca solid;
        border-radius: 5px;
        padding: 1em;
    }
        .items-container-header {
            text-align: center;

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
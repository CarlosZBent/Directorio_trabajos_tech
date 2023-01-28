<script lang="ts">
import Config from '../platforms.config.json'
import ItemsContainer from './ItemsContainer.svelte';
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
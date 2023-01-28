<script lang="ts">
import Config from '../platforms.config.json'
import Item from './Item.svelte';
import {iterateJSONData} from '../helpers.js'

let stringifiedConfigWork = JSON.stringify(Config.work)
let parsedConfigWork = JSON.parse(stringifiedConfigWork)

// let stringifiedConfigFreelancing = JSON.stringify(Config.freelancing)
// let parsedConfigFreelancing = JSON.parse(stringifiedConfigFreelancing)

let workInfo = iterateJSONData(Config.work)

</script>

<h1 class="text-center mx-auto my-5 text-2xl font-sans" > Directorio de trabajos tech de Gremio Creativo ✍ </h1>
<hr class="border-emerald-400 w-[75%] m-auto" />

<div class="flex justify-evenly mx-auto my-5 w-[75%]">
    <div class="items-container">
       <h2 class="items-container-header"> Plataformas para trabajo </h2>
       <hr class="border-emerald-400 w-[85%] mx-auto my-2">
        {#each workInfo as data}
            <Item name={data.name} link={data.link} />
            <hr>
        {/each}
    </div>
    <div class="items-container">
       <h2 class="items-container-header"> Plataformas para freelancing </h2>
       <hr class="border-emerald-400 w-[85%] mx-auto my-2">
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
    .items-container {
        width: 45%;
        min-width: 35%;
        height: fit-content;
        min-height: 80px;
        border: 1px #cacaca solid;
        border-radius: 5px;
    }
        .items-container-header {
            text-align: center;

        }
</style>
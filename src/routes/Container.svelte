<script lang="ts">
    import Item from "./Item.svelte";

    interface Platform {
        name: string
        link: string
    }

    export let title: string
    export let data: Platform[]
</script>

<div class="items-container overflow-x-scroll max-h-[25em] w-full sm:w-[90%] sm:min-w-[40%] md:w-[45%] my-2">
    <h2 class="items-container-header">{title}</h2>
    <hr class="border-emerald-400 w-[85%] mx-auto my-2">
    {#each data as data}
        <span class="item text-justify">
            <Item
            name={data.name} link={data.link} 
            />
        </span>
        <hr>
    {/each}
</div>

<style>
.items-container {
        /* max-width: 55%;
        min-width: fit-content; */
        height: fit-content;
        min-height: 80px;
        border: 1px #cacaca solid;
        border-radius: 5px;
        padding: 1em;
        /* hiding the scrollbar */
        scrollbar-width: none;
    }
    .items-container::-webkit-scrollbar {
            display: none;
        }
        .items-container-header {
            text-align: center;

        }
</style>
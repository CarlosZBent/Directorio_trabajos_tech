<script lang="ts">
  import Item from "./Item.svelte";

  interface Platform {
    name: string;
    link: string;
  }

  export let title: string;
  export let amount: number;
  export let data: Platform[];
</script>

<div class="main-container flex flex-auto flex-col gap-1 overflow-x-scroll max-h-[40em] w-full sm:w-[90%] sm:min-w-[40%] md:w-[45%] my-2">
  <h2 class="items-container-header flex-1 dark:text-white select-none">
    {title} ({amount})
  </h2>
  <hr class="border-emerald-400 w-[85%] mx-auto my-2 dark:border-emerald-800">

  <div class="item-container flex flex-auto flex-col h-96 gap-2">

    {#each data as data}
      <span class="item text-justify">
        <Item name={data.name} link={data.link} />
      </span>
    {/each}
  </div>
</div>

<style>
  .main-container {
    scrollbar-width: none;
    border-bottom: .5px solid rgb(111, 111, 111);
  }
  .main-container::-webkit-scrollbar {
    display: none;
  }
  .items-container-header {
    text-align: center;
  }
</style>

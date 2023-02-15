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

<div class="main-container flex flex-auto flex-col mx-auto gap-1 overflow-x-scroll h-fit w-full sm:min-w-[40%] md:w-[55%] my-2">
  <h2 class="items-container-header flex-1 dark:text-white select-none">
    {title} ({amount})
  </h2>
  <hr class="border-emerald-400 w-[85%] mx-auto my-2 dark:border-emerald-800">
  
  <div class="item-container flex flex-auto flex-col min-h-[50vh] gap-2">
    {#if amount==0}
    <span class="w-3/4 m-auto shadow-lg rounded-md mb-52 dark:bg-slate-800 bg-white p-5 py-6 dark:text-white">
      <p>
        Mmm, todavía no tenemos plataformas en esta sección.
        <br>
        ¿Por qué no <a href="#repo-link" class="link text-slate-400" >añadir una</a>?
      </p>
    </span>
    {:else}
      {#each data as data}
      <span class="item text-justify">
        <Item name={data.name} link={data.link} />
      </span>
      {/each}
    {/if}
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
  .link {
    text-decoration: underline;
  }
</style>

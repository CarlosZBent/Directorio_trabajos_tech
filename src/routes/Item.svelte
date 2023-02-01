<script lang="ts">
  export let name: string;
  export let link: string;
</script>

<div
  class="flex flex-auto flex-row dark:bg-slate-800 bg-white shadow rounded-md p-3"
>
  <a
    href={link}
    target="_blank rel=noreferrer"
    class="flex flex-auto my-auto gap-2 overflow-hidden"
  >
    <img
      class="h-8 my-auto dark:text-white bg-white dark:bg-slate-800 rounded"
      src={"http://visiting-chocolate-meerkat.faviconkit.com/" +
        link.replace("https://", "") +
        "/48"}
      alt="fav-icon"
    />

    <h1 class="my-2 font-semibold ml-auto dark:text-white ">
      {name}
    </h1>
  </a>
</div>

<style lang="postcss">
</style>

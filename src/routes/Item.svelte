<script lang="ts">
    import copy from "../copy.svg"

    export let name: string
    export let link: string

    async function copyTocClipboard(text:string){
       await navigator.clipboard.writeText(text)
    }

</script>


<div  class="flex flex-auto flex-row bg-white shadow hover:shadow-xl hover:transition-all rounded p-3">
    <a  href={link} target="_blank rel=noreferrer" class="flex flex-auto my-auto gap-2 overflow-hidden">
        <img class="h-8 my-auto" src={"http://visiting-chocolate-meerkat.faviconkit.com/" + link.replace("https://","") + "/48"} alt="fav-icon">

        <h1 class="my-2 font-semibold" >
            {name}
        </h1>
      
    </a>
    <button class="ml-auto p-2" on:click={() => copyTocClipboard(link)}>
        <img alt="copy" src={copy}/>
    </button>

   
</div>


<style lang="postcss">

</style>
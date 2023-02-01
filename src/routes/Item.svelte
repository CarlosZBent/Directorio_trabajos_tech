<script lang="ts">
    export let name: string
    export let link: string
</script>

<h1 class="my-2 font-semibold" >
    {name}
</h1>
<a class="block my-2 underline decoration-emerald-700 hover:decoration-red-500" 
href={link} target="_blank rel=noreferrer">
    {link}
</a>

<style lang="postcss">

</style>
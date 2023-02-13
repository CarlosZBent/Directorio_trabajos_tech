<script lang="ts">
    export let url:string
    export let name:string
    export let section:string

    import { activeSection } from "../../stores";
    
    const updateActiveSection = (val:string) => {
        $activeSection = val;
        console.log($activeSection)
    }
</script>

<a 
    href="{url}" class="nav-link decoration-emerald-700 bg-slate-100 hover:bg-slate-300 hover:decoration-blue-900 block w-full p-1 text-center my-2"
    on:click={()=> updateActiveSection(section)}
>    
    {name}
</a>

<style lang="postcss">

    .nav-link {
        /* text-decoration: underline; */
        font-family: sans-serif;
        font-size: medium;
    }

</style>
<script lang="ts">
    import SideBarLink from "./SideBarLink.svelte";

    let containerLeft = "-14.5rem"
</script>

<div class="flex p-0 bg-none absolute top-56 w-[17rem]" 
    on:mouseover={ ()=> containerLeft = "0rem"} 
    on:focus={ ()=> containerLeft = "0rem"} 
    on:mouseleave={ ()=> containerLeft = "-14.5rem"} 
    style="left:{containerLeft}">
    <aside class="nav-widget rounded-tr-md rounded-br-md border-0 w-56 border-slate-900 shadow-md shadow-slate-300 dark:shadow-slate-900  bg-slate-100 dark:bg-slate-800 dark:text-white py-2 block">
        <h2 class="text-center" >Tipo de plataforma</h2>
        <hr class="my-3 mx-auto w-[85%] border-slate-600 dark:border-slate-200" >
        <SideBarLink url="localhost:5173/" name="Trabajo" section="Plataformas para trabajo"/>
        <SideBarLink url="localhost:5173/" name="Freelancing"  section="Plataformas para freelancing"/>
        <SideBarLink url="localhost:5173/" name="Twitter"  section="Cuentas de Twitter"/>
        <SideBarLink url="localhost:5173/" name="Telegram"  section="Canales y grupos de Telegram"/>
        
    </aside>
    
    <svg
        on:mouseover={ ()=> containerLeft = "0rem"} 
        on:focus={ ()=> containerLeft = "0rem"} 
        on:mouseleave={ ()=> containerLeft = "-14.5rem"} 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-triangle my-auto mx-auto" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>

</div>

<style lang="postcss">
    svg {
        transform: rotate(90deg);
    }
</style>
<script lang="ts">
    import SideBarLink from "./SideBarLink.svelte";

    var containerLeft:string = "-14.5rem"
    var toggleRotation:string = "90deg"
</script>

<div class="flex p-0 bg-slate-100 dark:bg-slate-800 fixed top-72 w-[17rem] transition-all duration-1200 ease-in-out shadow-xl shadow-slate-300 dark:shadow-slate-900 rounded-tr-md rounded-br-md"
    on:mouseover={ ()=> {containerLeft = "0rem"; toggleRotation="-90deg"}}
    on:focus={ ()=> {containerLeft = "0rem"; toggleRotation="-90deg"}}
    on:mouseleave={ ()=> {containerLeft = "-14.5rem"; toggleRotation="90deg"}} 
    style="left:{containerLeft}">
    <aside class="nav-widget border-0 w-56 bg-slate-100 dark:bg-slate-800 dark:text-white py-2 block">
        <h2 class="text-center" >Tipo de plataforma</h2>
        <hr class="my-3 mx-auto w-[85%] border-slate-600 dark:border-slate-200" >
        <SideBarLink url="" name="Trabajo" section="Plataformas para trabajo"/>
        <SideBarLink url="" name="Freelancing"  section="Plataformas para freelancing"/>
        <SideBarLink url="" name="Twitter"  section="Cuentas de Twitter"/>
        <SideBarLink url="" name="Telegram"  section="Canales y grupos de Telegram"/>
        
    </aside>
    
    <svg
        on:mouseover={ ()=> {containerLeft = "0rem"; toggleRotation="-90deg"}}
        on:focus={ ()=> {containerLeft = "0rem"; toggleRotation="-90deg"}}
        on:mouseleave={ ()=> {containerLeft = "-14.5rem"; toggleRotation="90deg"}} 
        style="transform:rotate({toggleRotation})"
        xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-triangle my-auto mx-auto dark:text-slate-300 transition duration-500 ease-in-out" 
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
        /* transform: rotate(90deg); */
        
    }
</style>
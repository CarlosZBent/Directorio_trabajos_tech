<script lang="ts">
    import SideBarLink from "./SideBarLink.svelte";
</script>

<aside class="nav-widget rounded-tr-md rounded-br-md border border-l-0 w-28 border-slate-900 shadow-md shadow-slate-300 dark:shadow-slate-900  bg-slate-100 dark:bg-slate-800 dark:text-white py-2 absolute hidden xl:block left-0 top-56">
    <h2 class="text-center" >Tipo de plataforma</h2>
    <hr class="my-3 border-slate-600 dark:border-slate-200" >
    <SideBarLink url="localhost:5173/" name="Trabajo" section="Plataformas para trabajo"/>
    <SideBarLink url="localhost:5173/" name="Freelancing"  section="Plataformas para freelancing"/>
    <SideBarLink url="localhost:5173/" name="Twitter"  section="Cuentas de Twitter"/>
    <SideBarLink url="localhost:5173/" name="Telegram"  section="Canales y grupos de Telegram"/>
    
</aside>

<style lang="postcss">

</style>
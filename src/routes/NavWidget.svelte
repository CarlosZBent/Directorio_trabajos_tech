<script lang="ts">
    export let url:string
</script>

<aside class="nav-widget rounded-md border w-40 border-slate-900 shadow-md shadow-slate-300 bg-yellow-200 p-5 absolute hidden xl:block left-3">
    <a href="{url}#tips-trabajo" class="nav-link underline decoration-emerald-700 bg-emerald-400 hover:bg-blue-600 hover:decoration-blue-900">
        Consejos de la comunidad para encontrar trabajo
    </a>
    <hr class="my-3 border-slate-900">
    <a href="{url}#tips-entrevista" class="nav-link underline decoration-emerald-700 bg-emerald-400 hover:bg-blue-600 hover:decoration-blue-900">
        Consejos de la comunidad para las entrevistas
    </a>
</aside>

<style lang="postcss">

    .nav-link {
        /* text-decoration: underline; */
        font-family: sans-serif;
        font-size: small;
    }

</style>
<script lang="ts">
    import "../app.css";
    import type { LayoutData } from "./$types";
    import ThemeToggle from "./ThemeToggle.svelte";

    export let data: LayoutData;

    $: ({ theme } = data);
</script>

<div class={theme}>
    <slot />
</div>

<ThemeToggle {theme} />

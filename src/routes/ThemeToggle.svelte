<script lang="ts">
    import { enhance, type SubmitFunction } from "$app/forms";

    export let theme: string;
</script>

<div class="absolute top-5 right-5">
    <form method="POST" use:enhance>
        {#if theme === "dark"}
            <button formaction="?/setTheme&theme=light"
                ><!-- Sun Icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><circle cx="12" cy="12" r="5" /><path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                    /></svg
                ></button
            >
        {:else}
            <button formaction="?/setTheme&theme=dark">
                <!-- Moon Icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    /></svg
                >
            </button>
        {/if}
    </form>
</div>

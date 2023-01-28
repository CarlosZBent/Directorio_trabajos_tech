<script lang="ts">
    export let name: string
    export let link: string
</script>

<span>
    <h1>
        {name}
    </h1>
    <a href={link}>{link}</a>
</span>
<script lang="ts">
  import Config from "../platforms.config.json";
  import InfoWidget from "./InfoWidget.svelte";
  import { iterateJSONData } from "../helpers.js";
  import { mixpanelWebsiteVisit } from "../analytics";
  import Container from "./Container.svelte";

  interface MixpanelDataObject {
    id: string;
  }

  export let data: MixpanelDataObject;

  let mixpanel_id = data.id;

  // an iterable for each of the Config child objects
  let workInfo = iterateJSONData(Config.work);
  let freelancingInfo = iterateJSONData(Config.freelancing);
</script>

<div class="flex flex-auto flex-col bg-gray-200/30 dark:bg-gray-900">
  <h1
    class="text-center mx-auto mb-5 mt-10 lg:text-5xl md:text-4xl text-4xl font-bold font-[Garet] dark:text-white"
    use:mixpanelWebsiteVisit={mixpanel_id}
  >
    Directorio de trabajos tech
  </h1>

  <h2
    class="text-center my-4 font-[Montserrat] text-lg mx-5 text-gray-500 mb-8"
  >
    ¿Quieres trabajar en la industria tech? Tenemos decenas de plataformas para
    que encuentres tu próximo empleo
  </h2>

  <div class="flex flex-auto md:flex-row flex-col mx-6 md:mx-20 gap-2">
    <Container
      title="Plataformas para trabajo"
      data={workInfo}
      amount={workInfo.length}
    />
    <Container
      title="Plataformas para freelancing"
      data={freelancingInfo}
      amount={freelancingInfo.length}
    />
  </div>

  <div class="flex flex-row flex-auto overflow-hidden bg-gray-100 mt-6 p-6 dark:bg-gray-900/25" >
    <InfoWidget />
  </div>
</div>

<style lang="postcss">
    :global(html) {
        /* background-color: theme(colors.gray.100); */
        /* background-color: black; */
    }
    /* .infoContainer {
        border: 1px #cacaca solid;
        border-radius: 5px;
        margin-top: 5em;
        margin-bottom: 2em;
        padding: 1em;
        /* background-color: theme(colors.gray.200);
    } */
</style>

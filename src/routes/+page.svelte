<script lang="ts">
  import Config from "../platforms.config.json";
  import { activeSection } from "../stores";
  
  import InfoWidget from "./InfoWidget.svelte";
  import Container from "./Container.svelte";
  import SocialLinkContainer from "./SocialLinkContainer.svelte";
  import SideBar from "./SideBar/SideBar.svelte";
  
  import { iterateJSONData, getKeyOfObj, roundInteger } from "../helpers.js";
  import { mixpanelWebsiteVisit } from "../analytics";

  interface MixpanelDataObject {
    id: string;
  }

  export let data: MixpanelDataObject;

  let mixpanel_id = data.id;

  let sectionLookup: Object = {
    "Plataformas para trabajo": iterateJSONData(Config.work),
    "Plataformas para freelancing": iterateJSONData(Config.freelancing),
    "Cuentas de Twitter": iterateJSONData(Config.twitter),
    "Canales y grupos de Telegram": iterateJSONData(Config.telegram)
  }

  let totalNumberOfPlatforms: number = iterateJSONData(Config.work).length + iterateJSONData(Config.freelancing).length + iterateJSONData(Config.twitter).length + iterateJSONData(Config.telegram).length
  
</script>


<div class="flex flex-auto flex-col bg-gray-200/30 dark:bg-gray-900">
  <h1
  class="text-center mx-auto mb-5 mt-16 lg:text-5xl md:text-4xl text-4xl font-bold font-[Garet] dark:text-white"
  use:mixpanelWebsiteVisit={mixpanel_id}
  >
  Directorio de trabajos tech
</h1>

<h2
  class="text-center my-4 font-[Montserrat] text-xl mx-5 text-gray-600 dark:text-gray-500 mb-8"
  >
  ¿Quieres trabajar en la industria tech? Tenemos <b class="text-gray-700 dark:text-gray-400">más de { roundInteger(totalNumberOfPlatforms) } plataformas</b> para
  que encuentres tu próximo empleo
</h2>

<SocialLinkContainer />

<SideBar />

<div class="mx-auto md:mx-20 gap-2">
  <Container
      title={ $activeSection }
      data={ sectionLookup[ getKeyOfObj($activeSection, sectionLookup) ] }
      amount={ sectionLookup[ getKeyOfObj($activeSection, sectionLookup) ].length }
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

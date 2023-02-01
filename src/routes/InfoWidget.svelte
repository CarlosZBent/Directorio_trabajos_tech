<script>
import github from "../brand-github.svg"
import contribution from "../heart-handshake.svg"
    
</script>

<div class="flex flex-row flex-auto gap-4">
    <div class="flex flex-auto flex-col  gap-1 w-1/2 bg-white shadow p-3 rounded">
        <div class="flex flex-auto mb-1 mx-auto">
            <img class="h-6 my-auto" src={contribution} alt="contribution">
            <h2 class="font-semibold text-xl my-auto">
                Contribuye a la comunidad:
            </h2>
        </div>
       
        <p class="text-gray-600">
            En el archivo <code>platforms.config.json</code> añade un nuevo par key-value en la categoría correspondiente a la plataforma. 
            Si es una plataforma para freelancing: dentro de <code>freelancing</code> puedes añadirla de la siguiente forma <code>"nombre-de-plataforma": "URL"</code>.
        </p>
        
    </div>
   
    <div class="flex flex-auto flex-col gap-1 w-1/2 bg-white shadow p-3 rounded">
        <div class="flex flex-auto mb-1 mx-auto">
            <img class="h-6 my-auto" src={github} alt="contribution">
            <h2 class="font-semibold text-xl my-auto">
                Haz tuyo el directorio:
            </h2>
        </div>
      
        <p class="text-gray-600">
            Esto apenas empieza, y no queremos que pare de crecer. Puedes hacer peticiones y recomendaciones de las siguientes formas:
        </p>
        <ol class="text-xs">
            <li class="text-gray-600">1. Abre un <i>issue</i> en <a class="underline decoration-emerald-700" href="https://github.com/CarlosZBent/Directorio_trabajos_tech">este repositorio</a></li>
            <li class="text-gray-600">2. Comenta lo que tienes en mente en <a class="underline decoration-emerald-700" href="https://t.me/CarlosZBent">este grupo de Telegram</a></li>
        </ol>
    </div>
    
</div>

<style>

</style>
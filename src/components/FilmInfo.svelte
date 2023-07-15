<script>
    import Bbfc from './BBFC.svelte';
    export let film;
    export let festivals;
    const fields = ['']
</script>

<div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        {#if film.director}
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Director</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.director}</dd>
        </div>
        {/if}
        {#if film.writer}
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Writer</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.writer}</dd>
        </div>
        {/if}
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Starring</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.stars}</dd>
        </div>
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Year</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.year}</dd>
        </div>
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Runtime</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.runtime} minutes</dd>
        </div>
        {#if film.certificate}
            <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <dt class="text-sm font-medium leading-6 text-gray-900">BBFC</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Bbfc certificate={film.certificate} /></dd>
            </div>
        {/if}
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Country</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{film.country}</dd>
        </div>
        {#if festivals.length > 0}
        <div class="b-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Festivals</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{festivals.map((festival) => `${festival.name} ${festival.year}`).join(', ')}</dd>
        </div>
        {/if}
      </dl>
    </div>
  </div>
  



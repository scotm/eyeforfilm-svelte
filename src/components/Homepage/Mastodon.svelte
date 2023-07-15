<script lang='ts'>
    import { browser } from '$app/environment';
    import type { Status } from "$lib/types/Mastodon";
    import { onMount } from "svelte";
    // import type { DateTimeFormatOptions } from 'Intl';
    let statuses:Status[] = [];

    if (browser){
        onMount(async () => {
        const data = await fetch('https://bbq.snoot.com/api/v1/accounts/109347330558240570/statuses?limit=2').then(res => res.json()).then(data => {
        statuses = data as Status[];
    });
  });        
    }


  const formatDate = (isoDateTime:Date) => {
    const date = new Date(isoDateTime);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<div class="flow-root">
<ul role="list" class="-mb-8">
{#each statuses as status}
<li>
    <div class="relative pb-8">
      <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-100" aria-hidden="true"></span>
      <div class="relative flex space-x-3">
        <div>
          <span >
            <img class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="{status.account.avatar}" alt="">
          </span>
        </div>
        <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
          <div class="text-sm text-gray-500">
            {@html status.content}
          </div>
          <div class="whitespace-nowrap text-right text-sm text-gray-500">
            <a href="{status.url}"><time datetime="{(new Date(status.created_at)).toISOString().substring(0,10)}">{formatDate(status.created_at)}</time></a>
          </div>
        </div>
      </div>
    </div>
</li>

{/each}
</ul>
</div>

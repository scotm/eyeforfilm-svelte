<script lang='ts'>
    import type { Menu } from "$lib/types/HeaderMenu";

    export let menuData:Menu
	  let showMenu = false;
</script>


<div class="relative">
  <button on:click={()=> showMenu = !showMenu } type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
  {menuData.title}
  <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
  </svg>
  </button>

  <!--
  'Product' flyout menu, show/hide based on flyout menu state.

  Entering: "transition ease-out duration-200"
    From: "opacity-0 translate-y-1"
    To: "opacity-100 translate-y-0"
  Leaving: "transition ease-in duration-150"
    From: "opacity-100 translate-y-0"
    To: "opacity-0 translate-y-1"
  -->
  <div class="{showMenu ? '':'hidden'}  absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
    <div class="p-4">
      {#each menuData.links as link}
      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            {#if link.icon}
              <img class="h-6 w-6" src={link.icon} alt="">
            {:else}
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            {/if}
        </div>
        <div class="flex-auto">
          <a href="{link.url}" class="block font-semibold text-gray-900">
            {link.title}
            <span class="absolute inset-0"></span>
          </a>
          <p class="mt-1 text-gray-600">{link.description}</p>
        </div>
      </div>
      {/each}
    </div>
    {#if menuData.bottomLinks }
      <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        {#each menuData.bottomLinks as link}
          <a href="{link.url}" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
            </svg>
            Watch demo
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>


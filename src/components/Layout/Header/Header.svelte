<script lang="ts">
	import FlyoutMenu from './FlyoutMenu.svelte'
	import main_logo from '$lib/images/main_logo.svg';
	import {menuData} from '$lib/constants/MenuData';
	type MenuData = typeof menuData[number] & {isOpen:boolean};
	let myMenuData: MenuData[] = menuData.map((menu) => {
		return {
			...menu,
			isOpen: false
		}
	});
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	  <div class="flex lg:flex-1">
		<a href="/" class="-m-1.5 p-1.5">
		  <span class="sr-only">Eye For Film</span>
		  <img class="h-56 w-auto" src={main_logo} alt="Eye For Film">
		</a>
	  </div>
	  <div class="flex lg:hidden">
		<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
		  <span class="sr-only">Open main menu</span>
		  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		  </svg>
		</button>
	  </div>
	  <div class="hidden lg:flex lg:gap-x-12">
		{#each myMenuData as menu}
		{#if menu.links && menu.links.length === 0}
			<a href="{menu.url}" class="text-sm font-semibold leading-6 text-gray-900">{menu.title}</a>
		{:else}
			<FlyoutMenu menuData={menu} />
		{/if}
		{/each}
	  </div>
	  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
		<!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
	  </div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->

  </header>
<style>
</style>

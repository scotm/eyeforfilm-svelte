<script lang="ts">
	import FlyoutMenu from './FlyoutMenu.svelte'
	import main_logo from '$lib/images/main_logo.svg';
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	  <div class="flex lg:flex-1">
		<a href="#" class="-m-1.5 p-1.5">
		  <span class="sr-only">Your Company</span>
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
		
		<FlyoutMenu />
		<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
		<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
		<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
	  </div>
	  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
		<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
	  </div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true">
	  <!-- Background backdrop, show/hide based on slide-over state. -->
	  <div class="fixed inset-0 z-10"></div>
	  <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
		<div class="flex items-center justify-between">
		  <a href="#" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
		  </a>
		  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
			<span class="sr-only">Close menu</span>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		  </button>
		</div>
		<div class="mt-6 flow-root">
		  <div class="-my-6 divide-y divide-gray-500/10">
			<div class="space-y-2 py-6">
			  <div class="-mx-3">
				<button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
				  Product
				  <!--
					Expand/collapse icon, toggle classes based on menu open state.
  
					Open: "rotate-180", Closed: ""
				  -->
				  <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
				  </svg>
				</button>
				<!-- 'Product' sub-menu, show/hide based on menu state. -->
				<div class="mt-2 space-y-2" id="disclosure-1">
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
				  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
				</div>
			  </div>
			  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
			  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
			  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
			</div>
			<div class="py-6">
			  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </header>
  

<!-- <header>
	<nav class="">
		<div class="flex items-end">
			<a class="" href="/"><img src={main_logo} alt="Eye For Film" /></a>
			<button
				class=""
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="" />
			</button>

			<ul class="grow flex justify-between">
				<li class="">
					<a
						class="text-xl font-bold"
						href="/outnow"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Film
					</a>
					<div class="" aria-labelledby="navbarDropdown">
						<a class="block" href="/outnow">Out Now</a>
						<a class="block" href="/comingsoon">Coming Soon</a>
						<div class="" />
						<a class="block" href="/outnowus">Out Now - US</a>
						<a class="block" href="/comingsoonus">Coming Soon - US</a>
						<div class="" />
						<a class="block" href="/festivalhomepage">Festivals</a>
						<a class="block" href="/filmreviewarchive">Archive</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/latest_dvd"
						id="navbarDropdown2"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						DVD
					</a>
					<div class="" aria-labelledby="navbarDropdown2">
						<a class="block" href="/latest_dvd">Out Now</a>
						<a class="block" href="/dvdreviewarchive">Archive</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/comps"
						id="navbarDropdown3"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Interact
					</a>
					<div class="" aria-labelledby="navbarDropdown3">
						<a class="block" href="/comps">Competitions</a>
						<a class="block" href="/register">Newsletter</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/newsfeature"
						id="navbarDropdown4"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">News</a
					>
					<div class="" aria-labelledby="navbarDropdown4">
						<a class="block" href="/newsfeature">News Stories</a>
						<a class="block" href="/featurearchive">Features</a>
						<a class="block" href="/galleryarchive">Galleries</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/contactus"
						id="navbarDropdown3"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">Contact</a
					>
					<div class="" aria-labelledby="navbarDropdown">
						<a class="block" href="/contactus">About Us</a>
						<a class="block" href="/editorial">Editorial</a>
						<a class="block" href="/advertise">Advertise</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</header> -->

<style>
</style>

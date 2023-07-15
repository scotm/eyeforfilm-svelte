<script lang="ts">
	import DvdHomepage from '../components/Homepage/DVDHomepage.svelte';
	import Weekblurb from '../components/Weekblurb.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<Weekblurb weekblurb={data.week_blurb} week_films={data.weeksfilms} />
		<DvdHomepage dvd_releases={data.dvd_releases} />
		<div>
			<h2 class="text-2xl text-bold">TWITTER</h2>
			<img class="w-full" src="https://via.placeholder.com/300x200" alt="placeholder" />
		</div>
		<div>
			<h2 class="text-2xl text-bold">{@html data.week_blurb.secondary_heading}</h2>
			<!-- {@html data.week_blurb.secondary_text} -->
		</div>
	</div>
</section>

<style></style>

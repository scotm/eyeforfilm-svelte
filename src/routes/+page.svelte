<script lang="ts">
	import type { PageData } from './$types';

	import Counter from '../components/Counter.svelte';
	import Weekblurb from '../components/Weekblurb.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Weekblurb weekblurb={data.feed} week_films={data.weeksfilms} />
<section>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>

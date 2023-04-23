<script lang="ts">
	import { cleanHTML } from '../utils/cleanHTML';
	import type { RouterOutputs } from '$lib/trpc/router';
	export let weekblurb: RouterOutputs['get_week_blurb']['week_blurb'];
	export let week_films: RouterOutputs['get_week_blurb']['weeksfilms'];
	const films_with_posters = week_films.filter((film) => film.postershot !== '');
	const picked_film = films_with_posters[Math.floor(Math.random() * films_with_posters.length)];
</script>

<div>
	<h2 class="text-2xl text-bold">FILMS OUT THIS WEEK</h2>
	{#if picked_film}
		<div class="float-right ml-2 mb-2">
			<img
				style="width:95px"
				src={'https://www.eyeforfilm.co.uk/images/' + picked_film.postershot}
				alt=""
			/>
			<a class="font-bold text-sm" href="/review/{picked_film.io_review[0].slug}"
				>{picked_film.title}</a
			>
		</div>
	{/if}
	<div class="weekblurb">
		{@html weekblurb ? cleanHTML(weekblurb.text) : ''}
	</div>

	<ul class="grid grid-cols-1 md:grid-cols-2 text-center">
		{#each week_films as film}
			<li>
				<a class="font-bold text-sm" href="/review/{film.io_review[0].slug}">{film.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>

<script lang="ts">
	import Bbfc from '../../../components/BBFC.svelte';
	import Rating from '../../../components/Rating.svelte';
	import { cleanHTML } from '../../../utils/cleanHTML';
	import type { PageData } from './$types';

	export let data: PageData;
	const review = data.review;
	const film = data.review.core_film;
	const festivals = data.festivals.map((festival) => {
		return {
			name: festival.festival_info.acronym
				? festival.festival_info.acronym
				: festival.festival_info.name,
			year: festival.date_begins.getFullYear()
		};
	});
</script>

<div class="grid grid-cols-3">
	<div class="col-span-3">
		<h1 class="text-4xl m-2">{film.title}</h1>
		<Rating rating={review.rating} />
		<p>Reviewed by <b>{review.reviewer}</b></p>
	</div>

	<div class="col-span-2 mr-2">
		{@html cleanHTML(review.review)}
	</div>
	<div class="col-span-1 m-2">
		<div class="float-left mr-2 mb-2">
			<img src={'https://www.eyeforfilm.co.uk/images/' + film.postershot} alt="" />
		</div>
		<p class="m-2">{film.one_liner}</p>
		<hr class="h-px mt-4 mb-2 bg-gray-200 border-0 dark:bg-gray-700 clear-both" />
		{#if film.director}
			<p class="m-2">Director: {film.director}</p>
		{/if}
		{#if film.writer}
			<p class="m-2">Writer: {film.writer}</p>
		{/if}
		<p class="m-2">Starring: {film.stars}</p>
		<p class="m-2">Year: {film.year}</p>
		<p class="m-2">Runtime: {film.runtime} minutes</p>
		{#if film.certificate}
			<p class="m-2">BBFC: <Bbfc certificate={film.certificate} /></p>
		{/if}
		<p class="m-2">Country: {film.country}</p>

		<p class="m-2">
			Festivals: {festivals.map((festival) => `${festival.name} ${festival.year}`).join(', ')}
		</p>
	</div>
</div>

<script lang="ts">
	import { cleanHTML } from '../../../utils/cleanHTML';
	import { convertBBFCRating } from '../../../utils/film';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid grid-cols-3">
	<div class="col-span-3">
		<h1>{data.core_film.title}</h1>
		<h2>{data.rating}</h2>
		<p>Reviewed by {data.reviewer}</p>
	</div>

	<div class="col-span-2">
		{@html cleanHTML(data.review)}
	</div>
	<div class="col-span-1">
		<div class="float-left mr-2 mb-2">
			<img src={'https://www.eyeforfilm.co.uk/images/' + data.core_film.postershot} alt="" />
		</div>
		<p>{data.core_film.one_liner}</p>
		<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		{#if data.core_film.director}
			<p>Director: {data.core_film.director}</p>
		{/if}
		{#if data.core_film.writer}
			<p>Writer: {data.core_film.writer}</p>
		{/if}
		<p>Starring: {data.core_film.stars}</p>
		<p>Year: {data.core_film.year}</p>
		<p>Runtime: {data.core_film.runtime} minutes</p>
		{#if data.core_film.certificate}
			<p>BBFC: {convertBBFCRating(data.core_film.certificate)}</p>
		{/if}
		<p>Country: {data.core_film.country}</p>
		<!-- <p>Festivals: {data.core_film.festivals}</p> -->
	</div>
</div>

<script lang="ts">
	import type { week_blurb, core_film, io_review } from '@prisma/client';
	import { cleanHTML } from '../utils/cleanHTML';
	export let weekblurb: week_blurb;
	export let week_films: (core_film & { io_review: io_review[] })[];

	weekblurb.text = cleanHTML(weekblurb.text);
</script>

<section>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="col-span-1">
			<h1>FILMS OUT THIS WEEK</h1>
			{@html weekblurb.text}
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
				{#each week_films as film}
					<li><a href="/review/{film.io_review[0].slug}">{film.title}</a></li>
				{/each}
			</ul>
		</div>
		<div class="col-span-1">
			<img src="https://via.placeholder.com/300x300" alt="placeholder" />
		</div>
		<div class="col-span-1">
			<img src="https://via.placeholder.com/300x300" alt="placeholder" />
		</div>
		<div class="col-span-1">
			<img src="https://via.placeholder.com/300x300" alt="placeholder" />
		</div>
	</div>
</section>

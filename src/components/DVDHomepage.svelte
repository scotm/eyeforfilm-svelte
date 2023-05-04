<script lang="ts">
	import type { RouterOutputs } from '$lib/trpc/router';
	export let dvd_releases: RouterOutputs['get_week_blurb']['dvd_releases'];
</script>

<div>
	<h2 class="text-2xl text-bold">DVD/STREAMING HIGHLIGHTS</h2>
	<ul class="grid grid-cols-1">
		{#each dvd_releases as dvd_release, i}
			{@const shot =
				dvd_release.packshot || dvd_release.core_film.postershot || dvd_release.core_film.mainshot}
			<li>
				{#if shot !== ''}
					<div class={i % 2 === 0 ? 'float-right ml-2' : 'float-left mr-2'}>
						<img style="width:95px" src={'https://www.eyeforfilm.co.uk/images/' + shot} alt="" />
					</div>
				{/if}
				<a class="font-bold text-sm" href="/review/{dvd_release.core_film.io_review[0].slug}"
					>{dvd_release.core_film.title}</a
				><br />
				<a class="font-bold text-sm" href="/dvd_review/{dvd_release.slug}"
					>{dvd_release.disc_type} Review</a
				>
				{dvd_release.core_film.one_liner}
			</li>
		{/each}
	</ul>
</div>

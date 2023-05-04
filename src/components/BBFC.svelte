<script lang="ts">
	import U from '$lib/images/U.svg';
	import PG from '$lib/images/PG.svg';
	import rating_12 from '$lib/images/12.svg';
	import rating_12A from '$lib/images/12A.svg';
	import rating_15 from '$lib/images/15.svg';
	import rating_18 from '$lib/images/18.svg';
	import rating_R18 from '$lib/images/R18.svg';
	const rating_map = new Map([
		['U', U],
		['PG', PG],
		['12', rating_12],
		['12A', rating_12A],
		['15', rating_15],
		['18', rating_18],
		['R18', rating_R18]
	]);
	export let certificate: string;
	const rating_gfx = rating_map.get(certificate);
</script>

{#if rating_gfx}
	<img class="inline w-12" src={rating_gfx} alt="" />
{/if}

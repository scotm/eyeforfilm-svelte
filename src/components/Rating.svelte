<script lang="ts">
	import fullstar from '$lib/images/fullstar.svg';
	import halfstar from '$lib/images/halfstar.svg';
	import nostar from '$lib/images/nostar.svg';
	export let rating: number;
	const fullstars = Math.floor(rating);
	const halfstars = Math.floor(rating) < rating ? true : false;
	const nostars = 5 - Math.ceil(rating);
</script>

<div class="m-2">
	{#each Array(fullstars) as _}
		<img class="inline" src={fullstar} alt="full star" />
	{/each}
	{#if halfstars}
		<img class="inline" src={halfstar} alt="half star" />
	{/if}
	{#each Array(nostars) as _}
		<img class="inline" src={nostar} alt="no star" />
	{/each}
</div>

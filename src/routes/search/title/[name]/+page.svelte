<script lang="ts">
    import type {PageData} from './$types';
    import MovieList from '../../../../components/Layout/MovieList.svelte';
    export let data: PageData;
    const {films:movies, name} = data;
</script>

<h1>Search Results for "{name}"</h1>
<MovieList {movies}/>

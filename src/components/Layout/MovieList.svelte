<script lang='ts'>
  import type { RouterOutputs } from '$lib/trpc/router';
  import { Icon } from '@steeze-ui/svelte-icon'
	import { ArrowRight } from '@steeze-ui/heroicons'

  export let movies: RouterOutputs['search_film_reviews_by_title'];
</script>

<ul role="list" class="divide-y divide-gray-100">
{#each movies as movie}

  <li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
    <div class="flex gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="{'https://www.eyeforfilm.co.uk/images/'+movie.mainshot}" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">
          <a href="/review/{movie.default_review_slug}">
            <span class="absolute inset-x-0 -top-px bottom-0"></span>
            {movie.title}
          </a>
        </p>
        <p class="mt-1 flex text-sm leading-5 text-gray-700">
          <!-- <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">{movie.one_liner}</a> -->
          {movie.one_liner}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-x-4">
      <div class="hidden sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{movie.average_rating}</p>
        <p class="mt-1 text-xs leading-5 text-gray-700">{movie.year}</p>
      </div>
      <Icon class='color-gray-400' src={ArrowRight} size='sm'/>
    </div>
  </li>
{/each}
</ul>
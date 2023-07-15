<script lang="ts">
	export let lowertable_data: any;
	let column_1_alttag = '';
	const MEDIA_URL = 'http://localhost:8000/media/';
</script>

<div id="lowertables" class="grid grid-cols-4 gap-4 my-2">
	<div class="bg-indigo-100 flex flex-col">
		<div class="bg-gradient-to-r from-green-500 to-green-700 font-extrabold text-2xl px-2">
			<div class="mx-auto">News/Features</div>
		</div>
		<div class="m-2">
			<a href={lowertable_data.column_1_feature.get_absolute_url}>
				<slot name="table1headingimage">
					<img
						class="w-full rounded-lg"
						src={MEDIA_URL + lowertable_data.column_1_image}
						alt={column_1_alttag}
					/>
				</slot>
			</a>
		</div>
		<div class="lowertableText">
			{#each lowertable_data.get_features as feature}
				<p>
					<a class="font-bold hover:text-red-700 hover:underline" href={feature.get_absolute_url}
						>{feature.heading}</a
					>
					{feature.subheading}
				</p>
			{/each}
			{#each lowertable_data.get_news_stories as story}
				<p>
					<a class="font-bold hover:text-red-700 hover:underline" href={story.get_absolute_url}
						>{story.title}</a
					>
					{story.heading}
				</p>
			{/each}
			<div class="flex place-content-between">
				<a class="text-indigo-500 font-bold hover:text-red-700 hover:underline" href="/newsfeature"
					>More news and features</a
				>
				<!-- {% if request.user and request.user.is_authenticated %}
                <a class="text-white font-bold bg-indigo-500 p-1 rounded-md mr-2" href='{% url 'admin:FrontEnd_homepagenewsblock_change' lowertable_data.pk %}'>Edit table</a>
            {% endif %} -->
			</div>
		</div>
	</div>

	<div class="bg-white">
		<div class="bg-gradient-to-r from-green-500 to-green-700 font-extrabold text-2xl px-2">
			<div class="mx-auto">Festivals</div>
		</div>

		<div class="m-2">
			<a href={lowertable_data.column_2_link}>
				<slot name="table2headingimage">
					<img
						class="w-full rounded-lg"
						src={MEDIA_URL + lowertable_data.column_2_graphic}
						alt="Festival"
					/>
				</slot>
			</a>
		</div>
		<div class="lowertableText">
			<slot name="table2text">
				<p>{lowertable_data.column_2_blurb}</p>
				<p>
					Visit our <a class="font-bold hover:text-red-700 hover:underline" href="/festivalhomepage"
						>festivals section</a
					>.
				</p>
			</slot>
		</div>
	</div>

	<div class="bg-indigo-100">
		<div class="bg-gradient-to-r from-green-500 to-green-700 font-extrabold text-2xl px-2">
			<div class="mx-auto">Interact</div>
		</div>

		<div class="m-2">
			<a href={lowertable_data.column_3_link}>
				<slot name="table3headingimage">
					<img
						class="w-full rounded-lg"
						src={MEDIA_URL + lowertable_data.column_3_graphic}
						alt="Competitions"
					/>
				</slot>
			</a>
		</div>
		<div class="lowertableText">
			<p>{lowertable_data.column_3_blurb}</p>
		</div>
	</div>

	<div id="search" class="bg-white">
		<div class="bg-gradient-to-r from-green-500 to-green-700 font-extrabold text-2xl px-2">
			<div class="mx-auto">Search</div>
		</div>

		<div class="lowertableText">
			<strong>Search Movie Database</strong>

			<!-- <form class='flex' id="reviewsearch" method="get" action="{% url 'legacysearch' %}">
                <input class="basis-3/4 border-solid border-black border-2 shadow-md" type="text" name="title" size="15"/>
                <input class="basis-1/4 text-white font-bold bg-indigo-500 p-1 rounded-md" type="submit" value="Search"/>
            </form> -->

			<!-- <a href="https://www.google.com/"><img src="/images/Google_logo_transparent.png" alt="Google"/></a>

            <div id="cse-search-form" style="width: 100%;">Loading</div>
            <script src="https://www.google.co.uk/jsapi"></script>
            <script>
                google.load('search', '1', {language: 'en'});
                google.setOnLoadCallback(function () {
                    var customSearchOptions = {};
                    var orderByOptions = {};
                    orderByOptions['keys'] = [
                        {label: 'Relevance', key: ''},
                        {label: 'Date', key: 'date'}
                    ];
                    customSearchOptions['enableOrderBy'] = true;
                    customSearchOptions['orderByOptions'] = orderByOptions;
                    var customSearchControl = new google.search.CustomSearchControl(
                            '015788892483633750897:u4xbt_lmp7y', customSearchOptions);
                    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
                    var options = new google.search.DrawOptions();
                    options.enableSearchboxOnly("https://www.google.co.uk/cse?cx=015788892483633750897:u4xbt_lmp7y");
                    customSearchControl.draw('cse-search-form', options);
                }, true);
            </script>
            <link rel="stylesheet" href="https://www.google.com/cse/style/look/default.css" type="text/css"/>
            <style>
                input.gsc-input {
                    border-color: #D9D9D9;
                }

                input.gsc-search-button {
                    border-color: #666666;
                    background-color: #CECECE;
                }
            </style>  -->
			<div class="my-2">
				<p>
					Browse our <a
						class="font-bold hover:text-red-700 hover:underline"
						href="/filmreviewarchive">full archive</a
					>
				</p>
				<p>
					Browse our <a
						class="font-bold hover:text-red-700 hover:underline"
						href="/shortreviewarchive">short film archive</a
					>
				</p>
				<p>
					Browse our <a
						class="font-bold hover:text-red-700 hover:underline"
						href="/dvdreviewarchive">media archive</a
					>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>

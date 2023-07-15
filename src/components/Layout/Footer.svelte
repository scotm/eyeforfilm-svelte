<script lang="ts">
	let year = new Date().getFullYear();
</script>

<footer class="flex flex-col justify-center items-center p-4">
	<div class="flex justify-center">
		<a class="m-2 font-bold hover:text-red-700 hover:underline" href="/">Home</a>
		<a class="m-2 font-bold hover:text-red-700 hover:underline" href="/outnow">Films</a>
		<a class="m-2 font-bold hover:text-red-700 hover:underline" href="/latest_dvd">DVD</a>
		<a class="m-2 font-bold hover:text-red-700 hover:underline" href="/newsfeature"
			>News &amp; Features</a
		>
		<a class="m-2 font-bold hover:text-red-700 hover:underline" href="/contactus">Contact Us</a>
	</div>
	<div class="flex justify-center text-sm italic">
		&copy;2006-{year} Eye For Film. All rights reserved.
	</div>
</footer>

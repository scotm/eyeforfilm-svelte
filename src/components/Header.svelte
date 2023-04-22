<script lang="ts">
	import main_logo from '$lib/images/main_logo.svg';
</script>

<header>
	<nav class="">
		<div class="flex items-end">
			<a class="" href="/"><img src={main_logo} alt="Eye For Film" /></a>
			<button
				class=""
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="" />
			</button>

			<ul class="grow flex justify-between">
				<li class="">
					<a
						class="text-xl font-bold"
						href="/outnow"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Film
					</a>
					<div class="" aria-labelledby="navbarDropdown">
						<a class="block" href="/outnow">Out Now</a>
						<a class="block" href="/comingsoon">Coming Soon</a>
						<div class="" />
						<a class="block" href="/outnowus">Out Now - US</a>
						<a class="block" href="/comingsoonus">Coming Soon - US</a>
						<div class="" />
						<a class="block" href="/festivalhomepage">Festivals</a>
						<a class="block" href="/filmreviewarchive">Archive</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/latest_dvd"
						id="navbarDropdown2"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						DVD
					</a>
					<div class="" aria-labelledby="navbarDropdown2">
						<a class="block" href="/latest_dvd">Out Now</a>
						<a class="block" href="/dvdreviewarchive">Archive</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/comps"
						id="navbarDropdown3"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Interact
					</a>
					<div class="" aria-labelledby="navbarDropdown3">
						<a class="block" href="/comps">Competitions</a>
						<a class="block" href="/register">Newsletter</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/newsfeature"
						id="navbarDropdown4"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">News</a
					>
					<div class="" aria-labelledby="navbarDropdown4">
						<a class="block" href="/newsfeature">News Stories</a>
						<a class="block" href="/featurearchive">Features</a>
						<a class="block" href="/galleryarchive">Galleries</a>
					</div>
				</li>
				<li class="">
					<a
						class="text-xl font-bold"
						href="/contactus"
						id="navbarDropdown3"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">Contact</a
					>
					<div class="" aria-labelledby="navbarDropdown">
						<a class="block" href="/contactus">About Us</a>
						<a class="block" href="/editorial">Editorial</a>
						<a class="block" href="/advertise">Advertise</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
</style>

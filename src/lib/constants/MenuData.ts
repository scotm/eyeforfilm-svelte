import type { Menu } from "$lib/types/HeaderMenu";

export const menuData: Menu[] = [
  {
    title: "Film",
    links: [
      {
        title: "Out Now",
        url: "/outnow",
        description: "The latest releases, with reviews",
        icon: "film",
      },
      {
        title: "Coming Soon",
        url: "/comingsoon",
        description: "Upcoming releases, with reviews",
      },
      {
        title: "Out Now - US",
        url: "/outnowus",
        description: "The latest releases in the US",
      },
      {
        title: "Coming Soon - US",
        url: "/comingsoonus",
        description: "Upcoming releases in the US",
      },
      {
        title: "Festivals",
        url: "/festivalhomepage",
        description: "The latest festival releases",
      },
      {
        title: "Archive",
        url: "/filmreviewarchive",
        description: "Browse our archive of reviews",
      },
    ],
  },
  {
    title: "DVD",
    url: "/latest_dvd",
    links: [
      {
        title: "Out Now",
        url: "/latest_dvd",
        description: "The latest DVD releases",
      },
      {
        title: "Coming Soon",
        url: "/comingsoondvd",
        description: "Upcoming DVD releases",
      },
    ],
  },
  {
    title: "Competitions",
    url: "/comps",
    links: [
      {
        title: "Competitions",
        url: "/comps",
        description: "Enter our latest competitions",
      },
      {
        title: "Newsletter",
        url: "/register",
        description: "Sign up for our newsletter",
      },
    ],
  },
  {
    title: "News",
    url: "/newsfeature",
    links: [
      {
        title: "News Stories",
        url: "/newsfeature",
        description: "The latest news stories",
      },
      {
        title: "Features",
        url: "/featurearchive",
        description: "Browse our archive of features",
      },
      {
        title: "Galleries",
        url: "/galleryarchive",
        description: "Browse our archive of galleries",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contactus",
    links: [
      {
        title: "About Us",
        url: "/contactus",
        description: "About us",
      },
      {
        title: "Editorial",
        url: "/editorial",
        description: "Editorial Services",
      },
      {
        title: "Advertise",
        url: "/advertise",
        description: "Advertise with Eye For Film",
      },
    ],
  },
];

/*
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
*/

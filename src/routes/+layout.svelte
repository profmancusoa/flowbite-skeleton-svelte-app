<script lang="ts">
	import '../app.pcss';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	let drawerHidden = true; //hide or show by default drawer on mobile
	let searchBar = true; //show or hide the navbar searchbar
</script>

<header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
	<Navbar bind:drawerHidden bind:searchBar/>
</header>
<div class="overflow-hidden lg:flex">
	<Sidebar bind:drawerHidden />
	<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		<slot />
	</div>
</div>

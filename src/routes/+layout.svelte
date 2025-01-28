<script lang="ts">
	import '../app.pcss';
	import { dev  } from '$app/environment';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	let { children, data } = $props();
	let searchBar = $state(true); //show or hide the navbar searchbar
</script>


{#if data.session || dev}
	<header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
		<Navbar bind:searchBar user={data.user}/>
	</header>
	<div class="overflow-hidden lg:flex">
		<Sidebar />
		<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
			{@render children()}
		</div>
	</div>
{:else}
	{@render children()}
{/if}


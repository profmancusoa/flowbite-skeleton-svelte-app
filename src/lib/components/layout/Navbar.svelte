<script lang="ts">
	import {
		DarkMode,
		NavBrand,
		NavHamburger,
		Navbar,
		Search
	} from 'flowbite-svelte';
	import UserMenu from './UserMenu.svelte';
	import { showDrawer } from '$lib/ts/store.svelte';

	const { searchBar = $bindable() } = $props();
</script>

<Navbar fluid class="text-black" color="default" let:NavContainer>
	<NavHamburger
		onClick={() => showDrawer.value = !showDrawer.value}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class="lg:w-60">
		<img
			src="/images/navbar-logo.webp"
			class="me-2.5 h-8 sm:h-10"
			alt="Your Own Logo"
		/>
		<span
			class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
		>
			Computer
		</span>
	</NavBrand>
	{#if searchBar}
		<div class="hidden lg:block lg:ps-3">
			<form>
				<Search size="md" class="mt-1 w-96 border focus:outline-none" />
			</form>
		</div>
	{/if}
	<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<DarkMode />	
		<UserMenu/>
	</div>
</Navbar>

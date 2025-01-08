<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import {
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {
		AngleDownOutline,
		AngleUpOutline,
		ClipboardListSolid,
		CogSolid,
		GithubSolid,
		LifeSaverSolid,
		ChartPieOutline,
		TableColumnSolid,
		BugSolid,
		EnvelopeOpenSolid,
		RocketSolid,
		GiftBoxSolid,
		GridSolid,
		FileDocSolid,
		FileLinesSolid
	} from 'flowbite-svelte-icons';

	import Badge from './Badge.svelte';

	export let drawerHidden: boolean = false;

	const closeDrawer = () => {
		drawerHidden = true;
	};

	let iconClass =
		'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white';
	let groupClass = 'pt-2 space-y-2';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	let subSpanClass = 'flex-1 px-8 ms-3 whitespace-nowrap';

	$: mainSidebarUrl = $page.url.pathname;
	let activeMainSidebar: string;

	afterNavigate((navigation) => {
		// this fixes https://github.com/themesberg/flowbite-svelte/issues/364
		document.getElementById('svelte')?.scrollTo({ top: 0 });
		closeDrawer();

		activeMainSidebar = navigation.to?.url.pathname ?? '';
	});

	let posts = [
		{ name: 'Menu 1', icon: EnvelopeOpenSolid, href: '/pageMenu1'  },
		{ 
			name: 'Menu 2', 
			icon: RocketSolid, 
			href: '/pageMenu2',  
			badge: {
				type: 'text',
				value: 'Advanced',
				bgColor: 'bg-orange-200',
				fgColor: 'text-orange-900'
			}
		},
		{
			name: 'Menu 3',
			icon: GiftBoxSolid,
			children: {
				"Submenu-3-1": '/pageMenu3-1',
				"Submenu-3-2": '/pageMenu3-2'
			}
		},
		{
			name: 'Menu 4',
			icon: GridSolid,
			children: {
				"Submenu-4-1": '/pageMenu4-1',
				"Submenu-4-2": '/pageMenu4-2'
			}
		},
		{ 
			name: 'Menu 5', 
			icon: BugSolid, 
			href: '/settings',
			badge: {
				type: 'number',
				value: '5',
				bgColor: 'bg-green-200',
				fgColor: 'text-green-800'
			}
		}
	];

	let links = [
		{
			label: 'Flowbite Svelte',
			href: 'https://github.com/themesberg/flowbite-svelte',
			icon: GithubSolid
		},
		{
			label: 'Flowbite Svelte Docs',
			href: 'https://flowbite-svelte.com/docs/pages/quickstart',
			icon: FileDocSolid
		},
		{
			label: 'Sveltekit',
			href: 'https://svelte.dev/docs/kit/introduction',
			icon: FileLinesSolid
		}
	];
	let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar {mainSidebarUrl}
	class={drawerHidden ? 'hidden' : ''}
	activeUrl={mainSidebarUrl}
	activeClass="bg-gray-100 dark:bg-gray-700"
	asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-16 lg:block"
	>
	<h4 class="sr-only">Main menu</h4>
  <SidebarWrapper 
  	divClass="overflow-y-auto px-3 pt-20 lg:pt-5 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2"
  >
  	<nav class="divide-y divide-gray-200 dark:divide-gray-700">
		<SidebarGroup ulClass={groupClass} class="mb-3">
			{#each posts as { name, icon, children, href, badge } (name)}
				{#if children}
					<SidebarDropdownWrapper bind:isOpen={dropdowns[name]} label={name} class="pr-3">
						<AngleDownOutline slot="arrowdown" strokeWidth="3.3" size="sm" />
						<AngleUpOutline slot="arrowup" strokeWidth="3.3" size="sm" />
						<svelte:component this={icon} slot="icon" class={iconClass} />

						{#each Object.entries(children) as [title, href]}
							<SidebarItem
								label={title}
								{href}
								spanClass={subSpanClass}
							/>
						{/each}
					</SidebarDropdownWrapper>
				{:else}
					<SidebarItem
						label={name}
						{href}
						{spanClass}
					>
						<svelte:component this={icon} slot="icon" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" /> 
						<Badge {...badge} slot="subtext" />
					</SidebarItem>
				{/if}
			{/each}
		</SidebarGroup>
		<SidebarGroup ulClass={groupClass}>
			{#each links as { label, href, icon } (label)}
				<SidebarItem
					{label}
					{href}
					{spanClass}
					target="_blank"
				>
					<svelte:component this={icon} slot="icon" class={iconClass} />
				</SidebarItem>			
			{/each}
		</SidebarGroup>
	</nav>
  </SidebarWrapper>
</Sidebar>

<div
	hidden={drawerHidden}
	class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
	on:click={closeDrawer}
	on:keydown={closeDrawer}
	role="presentation"
></div>

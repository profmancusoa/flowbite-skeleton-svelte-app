<script lang="ts">
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';
	import { invalidateAll } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { dev } from '$app/environment';
	import { page } from '$app/state';

	async function logOut() {
		console.log("NAVBAR FRONTEND LOGOUT:", Date.now())
		if(!dev) {
			try {
				const res = await fetch('/logout', {
					method: 'POST',
				});

				console.log('LOGOUT FRONTEND:', res);
				if (res.ok) {
					invalidateAll();
					goto("/login");
				}
			} catch(e) {
				console.log("ERRORE IN LOGOUT")
				console.log(e)
			}
		}
	}
	
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={page.data.session.picture} referrerpolicy="no-referrer" tabindex={0} />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<span class="block text-sm">John Doe</span>
		<span class="block truncate text-sm font-medium">john@doe.com</span>
	</DropdownHeader>
	<DropdownItem>User submenu 1</DropdownItem>
	<DropdownItem>User submenu 2</DropdownItem>
	<DropdownItem>User submenu 3</DropdownItem>
	<DropdownDivider />
	<DropdownItem on:click={logOut}>Logout</DropdownItem>
</Dropdown>

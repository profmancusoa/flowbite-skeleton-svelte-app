<script lang="ts">
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let name: string = ''; 
	export let avatar: string = '';
	export let email: string = ''; 
</script>


<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={avatar} tabindex={0} />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>
	<DropdownItem>User submenu 1</DropdownItem>
	<DropdownItem>User submenu 2</DropdownItem>
	<DropdownItem>User submenu 3</DropdownItem>
	<DropdownDivider />
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>

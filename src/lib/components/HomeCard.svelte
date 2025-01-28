<script lang="ts">
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    
    let { img, title } = $props();
</script>

<Card {img} class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">{title}</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
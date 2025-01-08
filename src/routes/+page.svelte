<script lang="ts">
	import type { PageData } from './$types';
	import { Card, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<main class="p-4 grid md:grid-cols-3 gap-4 place-items-center">
  <Card img="https://picsum.photos/id/29/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Post Title 1</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>

  <Card img="https://picsum.photos/id/18/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Post Title 2</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>

  <Card img="https://picsum.photos/id/28/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Post Title 3</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>
  
   <Card img="https://picsum.photos/id/35/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Post Title 4</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>
  
  <Card img="https://picsum.photos/id/69/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Post Title 5</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>

  <Card img="https://picsum.photos/id/76/300/200" class="mb-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Post Title 6</h5>
    <p class="mb-3 font-normal text-gray-400 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>
</main>



<script lang="ts">
    export let type  : String = '';
    export let value : String = '';
    export let bgColor : String = 'bg-gray-200';
    export let fgColor : String = 'text-gray-800';
</script>
						
{#if value != ''}
    {#if type == 'text'}
        <span class="inline-flex justify-center items-center px-3 ms-3 text-sm font-medium {bgColor} {fgColor} rounded-full dark:bg-gray-700 dark:text-gray-300"> {value} </span>
    {:else if type == 'number'}
        <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium {bgColor} {fgColor} rounded-full dark:bg-primary-900 dark:text-primary-200"> {value} </span>
    {/if}				    
{/if}
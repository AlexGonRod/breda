<script lang="ts">
    export let type: string;
    export let message: string
</script>

<!--  success message-->
{#if type}
    <div class="absolute top-0 w-[100%] flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm {type === 'success' ? 'shadow-green-600' : 'shadow-red-600'} translate-y-0 hover:translate-y-[-6em] transition-all duration-500 ease-in-out pointer-events-auto">
    <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 {type === 'success' ? 'text-green-500' : 'text-red-600' }" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd" />
        </svg>
        <p class="ml-3 text-sm font-bold {type === 'success' ? 'text-green-600' : 'shadow-red-600'}">{message}</p>
    </div>
    <span class="inline-flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </span>
    </div>
{/if}



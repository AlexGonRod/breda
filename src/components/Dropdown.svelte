<script lang="ts">
	import type { Taula } from "$lib/interfaces";

	let isOpen = false;
	export let optionSelected: Taula;
	export let options: any[];
	export let handleSelectedOptions: (a:any) => void;

	function handlerOpenMenu() {
		isOpen = !isOpen;
	}

	function handleSelectOption(option) {
		handleSelectedOptions(option);
		handlerOpenMenu();
	}
</script>

<div class="dropdown relative inline-block text-left mb-4">
	<div>
		<button
			type="button"
			on:click={handlerOpenMenu}
			class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			id="menu-button"
			aria-expanded={isOpen}
			aria-haspopup="true"
		>
			{optionSelected.nom}
			<svg
				class="-mr-1 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	{#if isOpen}
		<div
			class="menu absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				{#each options as option}
					<span
						class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 border-t-2"
						role="menuitem"
						tabindex="-1"
						id="menu-item"
						on:click={() => handleSelectOption(option)}
						on:keydown={() => handleSelectOption(option)}
						>{option.nom}
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.menu.closed {
		display: none;
	}
</style>

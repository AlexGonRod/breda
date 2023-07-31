<script lang="ts">
	import type { Taula } from '$lib/types';
	import Dropdown from './Dropdown.svelte';

	const taula: Taula = {
		nom: '',
		cognom: '',
		telefon: '',
		adults: 0,
		nens: 0,
		veggi: false,
		veggiNum: 0,
		pagat: false,
	};
    let isClickedOption = false;

	function handleSubmit(value) {
		// Lógica para enviar el formulario
        isClickedOption = !isClickedOption;
		console.log('Formulario enviado');
	}

    const taules = [
        {id: 1, name: "Jose"},
        {id: 2, name: "Albert"},
        {id: 3, name: "Alba"},
        {id: 4, name: "LLuis"},
    ]

</script>

<form class="max-w-md mx-auto" on:submit|preventDefault={handleSubmit}>
	<Dropdown options={taules} handleOnSubmit={handleSubmit}/>

    {#if !isClickedOption}
        <div class="mb-4">
            <label for="nom" class="block text-gray-700">Nom</label>
            <input
                type="text"
                id="nom"
                bind:value={taula.nom}
                class="form-input mt-1 block w-full"
                required
            />
        </div>

        <div class="mb-4">
            <label for="cognom" class="block text-gray-700">Cognom</label>
            <input
                type="text"
                id="cognom"
                bind:value={taula.cognom}
                class="form-input mt-1 block w-full"
                required
            />
        </div>

        <div class="mb-4">
            <label for="telefon" class="block text-gray-700">Telefon</label>
            <input
                type="tel"
                id="telefon"
                bind:value={taula.telefon}
                class="form-input mt-1 block w-full"
                required
            />
        </div>
    {/if}
	<div class="mb-4">
		<label for="telefon" class="block text-gray-700">Adults</label>
		<input
			type="tel"
			id="nens"
			bind:value={taula.adults}
			class="form-input mt-1 block w-full"
			required
		/>
	</div>
	<div class="mb-4">
		<label for="telefon" class="block text-gray-700">Nens</label>
		<input
			type="tel"
			id="nens"
			bind:value={taula.nens}
			class="form-input mt-1 block w-full"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="pagat" class="flex items-center">
			<input
				type="checkbox"
				id="pagat"
				bind:checked={taula.veggi}
				class="form-checkbox"
			/>
			<span class="ml-2 text-gray-700">Vegetal</span>
		</label>
	</div>
	{#if taula.veggi}
		<div class="mb-4">
			<label for="telefon" class="block text-gray-700">Num</label>
			<input
				type="tel"
				id="nens"
				bind:value={taula.veggiNum}
				class="form-input mt-1 block w-full"
				required
			/>
		</div>
	{/if}
	<div class="mb-4">
		<label for="pagat" class="flex items-center">
			<input
				type="checkbox"
				id="pagat"
				bind:checked={taula.pagat}
				class="form-checkbox"
			/>
			<span class="ml-2 text-gray-700">Pagat</span>
		</label>
	</div>

	<button
		type="submit"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Enviar
	</button>
</form>

<style lang="postcss">
	.form-input {
		@apply px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500;
	}

	.form-checkbox {
		@apply rounded text-blue-500 focus:ring-blue-500;
	}
</style>

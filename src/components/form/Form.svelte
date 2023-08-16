<script lang="ts">
	import type { Taula, Taules } from '$lib/interfaces';
	import { enhance, applyAction } from '$app/forms';
	import Dropdown from '../Dropdown.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Toast from '../Toast.svelte';
	import { invalidateAll } from '$app/navigation';

	export let options: Taules;
	export let form: Record<string | number, unknown>;
	export let loading: Boolean = false;
	export let type: string;

	async function sleep() {
		type = ''
	}

	$: isSuccess = type === 'success' ? 'Correcte' : 'Error al guardar';
	$: isDefault = optionSelected.nom === 'Taula';

	const saveToDDB: SubmitFunction = () => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
				type = result.type;
				await invalidateAll();
			}
			if (result.type === 'success' && isDefault) update({ reset: true });
			await applyAction(result);
			setTimeout(sleep, 2000);;
		};
	};

	const taula: Taules = {
		id: 0,
		nom: '',
		telefon: '',
		adults: 1,
		nens: 0,
		veggi: false,
		veggiNum: 0,
	};
	let optionSelected: Taula | Taules = { id: 0, nom: 'Taula' };

	function handleSelectedOptions(value: Taules) {
		optionSelected = { ...value };
	}

	const defaultValue = [optionSelected];
	const totalData = [...defaultValue, ...options];
</script>

<div class="mb-4 max-w-md mx-auto">
	<Dropdown options={totalData} {optionSelected} {handleSelectedOptions} />

	{#if form?.error}
		<p class="text-red-600">
			{Object.keys(form.error)[0].toUpperCase()}
			{Object.values(form.error)[0]}
		</p>
	{/if}
	{#if !isDefault}
		<form
			method="POST"
			action="?/update&id={optionSelected.id}"
			class="max-w-md mx-auto"
			use:enhance={saveToDDB}
		>
			<div class="mb-4">
				<label for="adults" class="block text-gray-700">Adults</label>
				<input
					type="number"
					name="adults"
					class="form-input mt-1 block w-full"
					placeholder={optionSelected?.adults}
					value={optionSelected?.adults}
					required
				/>

				<label for="nens" class="block text-gray-700">Nens</label>
				<input
					type="number"
					name="nens"
					class="form-input mt-1 block w-full"
					placeholder={optionSelected?.nens}
					value={optionSelected?.nens}
					required
				/>

				<div class="flex items-center my-4">
					<input
						type="checkbox"
						name="veggi"
						bind:checked={optionSelected.veggi}
						class="form-checkbox"
					/>
					<span class="ml-2 text-gray-700">Vegetal</span>
				</div>

				{#if optionSelected?.veggi}
					<div class="my-4">
						<label for="veggi" class="block text-gray-700"
							>Quantitat</label
						>
						<input
							type="number"
							name="veggiNum"
							class="form-input mt-1 block w-full"
							placeholder={optionSelected?.veggiNum}
							value={optionSelected?.veggiNum}
							required
						/>
					</div>
				{/if}
			</div>

			<button
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Enviar
			</button>
		</form>
	{:else}
		<form
			method="POST"
			action="?/add"
			use:enhance={saveToDDB}
			class="max-w-md mx-auto"
		>
			<div class="mb-4">
				<label for="nom" class="block text-gray-700">Nom</label>
				<input
					type="text"
					name="nom"
					class="form-input mt-1 block w-full"
					value={form?.nom || ''}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="telefon" class="block text-gray-700">Telefon</label>
				<input
					type="number"
					name="telefon"
					class="form-input mt-1 block w-full"
				/>
			</div>

			<label for="adults" class="block text-gray-700">Adults</label>
			<input
				type="number"
				name="adults"
				class="form-input mt-1 block w-full"
				value={form?.adults}
				required
			/>

			<label for="nens" class="block text-gray-700">Nens</label>
			<input
				type="number"
				name="nens"
				class="form-input mt-1 block w-full"
				value={form?.nens}
				required
			/>

			<div class="flex items-center my-4">
				<input
					type="checkbox"
					name="veggi"
					bind:checked={taula.veggi}
					class="form-checkbox"
				/>
				<span class="ml-2 text-gray-700">Vegetal</span>
			</div>

			{#if taula.veggi}
				<div class="my-4">
					<label for="veggi" class="block text-gray-700"
						>Quantitat</label
					>
					<input
						type="number"
						name="veggiNum"
						class="form-input mt-1 block w-full"
						placeholder={form?.veggiNum}
						value={form?.veggiNum}
						required
					/>
				</div>
			{/if}

			<button
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Enviar
			</button>
		</form>
	{/if}
	<Toast {type} message={isSuccess} />
</div>

<style lang="postcss">
	.form-input {
		@apply px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500;
	}

	.form-checkbox {
		@apply rounded text-blue-500 focus:ring-blue-500;
	}
</style>

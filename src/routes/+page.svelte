<script lang="ts">
	import Form from '../components/form/Form.svelte';
	import type { ActionData } from './$types.js';


	export let data;
  export let form: ActionData

</script>

<main>
	<h1 class="max-w-md mx-auto text-2xl font-bold mb-4">Formulari</h1>
	<Form options={data.taules} {form} />
</main>

<style lang="postcss">
	main {
		@apply mx-auto max-w-2xl p-4;
	}
	.form-input {
		@apply px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500;
	}

	.form-checkbox {
		@apply rounded text-blue-500 focus:ring-blue-500;
	}
</style>

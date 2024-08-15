<script>
	import { mealArray } from "../stores";

	let newMealName;
	let newMealCalories;
	function handleMealFormSubmit() {
		if (!newMealName || !newMealCalories) {
			alert("Please don't leave any fields empty");
			return;
		}
		mealArray.addMeal(newMealName, newMealCalories);
		newMealName = "";
		newMealCalories = "";
	}
</script>

<div class="flex flex-col items-stretch gap-6">
	<h2 class="text-3xl font-bold">
		<div class="size-4 rounded-full bg-green-500 mr-2 inline-block"></div>
		Meals / Food Items
	</h2>
	<!-- add meal form -->
	<form
		class="space-y-4 p-4 rounded-sm bg-green-200"
		on:submit|preventDefault={handleMealFormSubmit}
	>
		<div class="flex flex-col space-y-2">
			<label class="font-medium" for="input-meal-name">Meal Name </label>
			<input
				maxlength="36"
				autocomplete="off"
				id="input-meal-name"
				name="input-meal-name"
				type="text"
				placeholder="Chicken Sa..."
				class="input input-bordered w-full custom-placeholder"
				bind:value={newMealName}
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label class="font-medium" for="input-meal-calories"
				>Calories Consumed
			</label>
			<input
				id="input-meal-calories"
				name="input-meal-calories"
				type="number"
				placeholder="250"
				class="input input-bordered w-full custom-placeholder"
				bind:value={newMealCalories}
			/>
		</div>
		<button type="submit" class="nav-button w-full">Add Meal</button>
	</form>
	<!-- meal items -->
	{#each $mealArray as mealItem (mealItem.id)}
		<div
			class="p-4 rounded-md shadow-md grid grid-cols-1 sm:grid-cols-3 bg-green-200"
		>
			<div class="py-4 grid place-items-center">
				<span class="text-center text-sm font-medium">{mealItem.name}</span>
			</div>
			<span
				class="text-2xl font-medium text-center rounded-md bg-green-500 py-4"
				>{mealItem.calories}</span
			>
			<div class="grid place-items-center py-4">
				<button on:click={() => mealArray.removeMeal(mealItem.id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="inline-block h-8 w-8 stroke-current text-red-600"
						><path
							d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"
						></path></svg
					>
				</button>
			</div>
		</div>
	{/each}
</div>

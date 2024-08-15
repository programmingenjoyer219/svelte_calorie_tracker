<script>
	import { workoutArray } from "../stores";

	let newWorkoutName;
	let newWorkoutCalories;
	function handleWorkoutFormSubmit() {
		if (!newWorkoutName || !newWorkoutCalories) {
			alert("Please don't leave any fields empty");
			return;
		}
		workoutArray.addWorkout(newWorkoutName, newWorkoutCalories);
		newWorkoutName = "";
		newWorkoutCalories = "";
	}
</script>

<div class="flex flex-col items-stretch gap-6">
	<h2 class="text-3xl font-bold">
		<div class="size-4 rounded-full bg-orange-500 mr-2 inline-block"></div>
		Workout / Exercises
	</h2>
	<!-- add workout form -->
	<form
		class="space-y-4 p-4 rounded-sm bg-orange-200"
		on:submit|preventDefault={handleWorkoutFormSubmit}
	>
		<div class="flex flex-col space-y-2">
			<label class="font-medium" for="input-workout-name">Workout Name </label>
			<input
				maxlength="36"
				autocomplete="off"
				id="input-workout-name"
				name="input-workout-name"
				type="text"
				placeholder="Jumping Ja..."
				class="input input-bordered w-full custom-placeholder"
				bind:value={newWorkoutName}
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label class="font-medium" for="input-workout-calories"
				>Calories Burned
			</label>
			<input
				id="input-workout-calories"
				name="input-workout-calories"
				type="number"
				placeholder="300"
				class="input input-bordered w-full custom-placeholder"
				bind:value={newWorkoutCalories}
			/>
		</div>
		<button type="submit" class="nav-button-secondary w-full"
			>Add Workout</button
		>
	</form>
	<!-- meal items -->
	{#each $workoutArray as workoutItem (workoutItem.id)}
		<div
			class="p-4 rounded-md shadow-md grid grid-cols-1 sm:grid-cols-3 bg-orange-200"
		>
			<div class="py-4 grid place-items-center">
				<span class="text-center text-sm font-medium">{workoutItem.name}</span>
			</div>
			<span
				class="text-2xl font-medium text-center rounded-md bg-orange-500 py-4"
				>{workoutItem.calories}</span
			>
			<div class="grid place-items-center py-4">
				<button on:click={() => workoutArray.removeWorkout(workoutItem.id)}>
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

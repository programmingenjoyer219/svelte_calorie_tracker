<script>
	import { dailyLimit, mealArray, workoutArray } from "../stores";

	export let modalCloseButton;
	export let resetCloseButton;

	let newCalorieLimit = $dailyLimit;

	function setLimit() {
		if (!newCalorieLimit) {
			alert("Please don't leave the field empty!");
			return;
		}
		dailyLimit.setValue(newCalorieLimit);
		modalCloseButton.click();
	}

	function reset() {
		mealArray.reset();
		workoutArray.reset();
		resetCloseButton.click();
	}

	function handleSetLimitModalClick() {
		// @ts-ignore
		my_modal_set_limit.showModal();
	}

	function handleResetModalClick() {
		// @ts-ignore
		my_modal_reset.showModal();
	}
</script>

<nav
	class="bg-green-500 border-b-2 border-zinc-800 navbar flex flex-col space-y-4 sm:flex-row sm:space-y-0 p-4"
>
	<div class="flex-1">
		<span class="text-lg font-semibold">Tracalorie</span>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<!-- set limit button -->
		<button class="nav-button" on:click={handleSetLimitModalClick}
			>Set Calorie Limit</button
		>

		<!-- set limit modal -->
		<dialog id="my_modal_set_limit" class="modal">
			<div class="modal-box space-y-4 bg-green-50">
				<h3 class="text-center font-medium text-lg">Set Calorie Limit</h3>
				<form on:submit|preventDefault={setLimit} class="space-y-4">
					<input
						class="input input-bordered input-primary w-full text-center"
						type="number"
						placeholder="2000"
						bind:value={newCalorieLimit}
					/>
					<button class="nav-button w-full">Set limit</button>
				</form>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>

		<!-- reset button -->
		<button on:click={handleResetModalClick} class="nav-button-tertiary"
			>Reset</button
		>

		<!-- reset modal -->
		<dialog id="my_modal_reset" class="modal">
			<div class="modal-box space-y-4 bg-red-50">
				<!-- alert box -->
				<div role="alert" class="alert">
					<svg
						class="stroke-info h-6 w-6 shrink-0 text-red-600"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						><path
							d="M4.00001 20V14C4.00001 9.58172 7.58173 6 12 6C16.4183 6 20 9.58172 20 14V20H21V22H3.00001V20H4.00001ZM6.00001 14H8.00001C8.00001 11.7909 9.79087 10 12 10V8C8.6863 8 6.00001 10.6863 6.00001 14ZM11 2H13V5H11V2ZM19.7782 4.80761L21.1924 6.22183L19.0711 8.34315L17.6569 6.92893L19.7782 4.80761ZM2.80762 6.22183L4.22183 4.80761L6.34315 6.92893L4.92894 8.34315L2.80762 6.22183Z"
						></path></svg
					>
					<span>Clicking this button will reset your progress</span>
				</div>
				<button class="nav-button-tertiary w-full" on:click={reset}
					>Reset</button
				>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</div>
</nav>

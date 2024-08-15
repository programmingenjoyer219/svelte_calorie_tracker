<script>
	import Navbar from "./components/Navbar.svelte";
	import Stats from "./components/Stats.svelte";
	import MealArea from "./components/MealArea.svelte";
	import WorkoutArea from "./components/WorkoutArea.svelte";
	import { afterUpdate } from "svelte";

	let modalCloseButton;
	let resetCloseButton;

	afterUpdate(() => {
		modalCloseButton = document.querySelector(
			"#my_modal_set_limit form[method='dialog'][class='modal-backdrop'] button"
		);

		resetCloseButton = document.querySelector(
			"#my_modal_reset form[method='dialog'][class='modal-backdrop'] button"
		);
	});
</script>

<!-- navbar -->
<Navbar {modalCloseButton} {resetCloseButton} />

<!-- stats -->
<Stats />

<!-- froms and items -->
<section class="p-4 max-w-lg md:max-w-5xl mx-auto">
	<div class="grid grid-cols-1 gap-[6rem] md:grid-cols-2 md:gap-4">
		<!-- column-1 :: meals -->
		<MealArea />
		<!-- column-2 :: workout -->
		<WorkoutArea />
	</div>
</section>

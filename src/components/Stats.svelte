<script>
	import {
		dailyLimit,
		calorieConsumed,
		calorieBurned,
		netCalorieIntake,
		caloriesRemaining,
		progress,
	} from "../stores";

	let progressComment = "Lets go!";

	$: {
		if ($progress === 0) {
			progressComment = "Lets go!";
		} else if ($progress < 25) {
			progressComment = "You are doing good!";
		} else if ($progress < 50) {
			progressComment = "You are doing great! Keep it up!";
		} else if ($progress < 75) {
			progressComment = "Keep going! You're almost there!";
		} else if ($progress === 100) {
			progressComment = "Hooray! You did it!";
		}
	}
</script>

<section class="container max-w-lg md:max-w-5xl mx-auto p-4 space-y-4">
	<!-- row-1 :: calorie limit & net calories consumed -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<!-- calorie limit -->
		<div class="stat border-2 border-zinc-800 bg-zinc-800 text-gray-100">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="inline-block h-8 w-8 stroke-current"
					><path
						d="M4.22235 3.80753L10.9399 10.525L8.11144 13.3535L4.22235 9.46438C2.66026 7.90229 2.66026 5.36963 4.22235 3.80753ZM14.2683 12.1464L13.4147 12.9999L20.4858 20.071L19.0716 21.4852L12.0005 14.4141L4.92946 21.4852L3.51525 20.071L12.854 10.7322C12.2664 9.27525 12.8738 7.1769 14.4754 5.5753C16.428 3.62268 19.119 3.1478 20.4858 4.51464C21.8526 5.88147 21.3778 8.57242 19.4251 10.525C17.8235 12.1267 15.7252 12.7341 14.2683 12.1464Z"
					></path></svg
				>
			</div>
			<div class="stat-title">Calorie Limit</div>
			<div class="stat-value text-primary">{$dailyLimit}</div>
			<div class="stat-desc hidden sm:block tracking-wider font-semibold">
				Today's target is to consume {$dailyLimit} calories
			</div>
		</div>
		<!-- net calories consumed -->
		<div class="stat border-2 border-zinc-800 bg-green-500">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="inline-block h-8 w-8 stroke-current"
					><path
						d="M5 18L12.6796 12L5 6V4H19V6H8.26348L16 12L8.26348 18H19V20H5V18Z"
					></path></svg
				>
			</div>
			<div class="stat-title">Net Calories Consumed</div>
			<div class="stat-value text-primary">{$netCalorieIntake}</div>
			<div class="stat-desc hidden sm:block tracking-wider font-semibold">
				Today's net calorie consumption
			</div>
		</div>
	</div>
	<!-- row-2 :: calories consumed, burned and remaining -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<!-- calories consumed -->
		<div class="stat border-2 border-zinc-800">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="inline-block h-8 w-8 stroke-current"
					><path
						d="M21 2V22H19V14H16V7C16 4.23858 18.2386 2 21 2ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"
					></path></svg
				>
			</div>
			<div class="stat-title">Calories Consumed</div>
			<div class="stat-value text-primary">{$calorieConsumed}</div>
		</div>

		<!-- calories burned -->
		<div class="stat border-2 border-zinc-800">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="inline-block h-8 w-8 stroke-current"
					><path
						d="M12 23C7.85786 23 4.5 19.6421 4.5 15.5C4.5 13.3462 5.40786 11.4045 6.86179 10.0366C8.20403 8.77375 11.5 6.49951 11 1.5C17 5.5 20 9.5 14 15.5C15 15.5 16.5 15.5 19 13.0296C19.2697 13.8032 19.5 14.6345 19.5 15.5C19.5 19.6421 16.1421 23 12 23Z"
					></path></svg
				>
			</div>
			<div class="stat-title">Calories Burned</div>
			<div class="stat-value text-primary">{$calorieBurned}</div>
		</div>

		<!-- calories remaining -->
		<div class="stat border-2 border-zinc-800">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="inline-block h-8 w-8 stroke-current"
					><path
						d="M11 5.07089C7.93431 5.5094 5.5094 7.93431 5.07089 11H7V13H5.07089C5.5094 16.0657 7.93431 18.4906 11 18.9291V17H13V18.9291C16.0657 18.4906 18.4906 16.0657 18.9291 13H17V11H18.9291C18.4906 7.93431 16.0657 5.5094 13 5.07089V7H11V5.07089ZM3.05493 11C3.51608 6.82838 6.82838 3.51608 11 3.05493V1H13V3.05493C17.1716 3.51608 20.4839 6.82838 20.9451 11H23V13H20.9451C20.4839 17.1716 17.1716 20.4839 13 20.9451V23H11V20.9451C6.82838 20.4839 3.51608 17.1716 3.05493 13H1V11H3.05493ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					></path></svg
				>
			</div>
			<div class="stat-title">Calories Remaining</div>
			<div class="stat-value text-primary">{$caloriesRemaining}</div>
		</div>
	</div>
	<!-- row-2 :: progress bar -->
	<div class="space-y-4">
		<p class="font-semibold text-lg">{progressComment}</p>
		<div class="w-full h-4 border-2 border-zinc-800 rounded-full">
			<div
				style={`width: ${$progress}%;`}
				class="bg-green-500 h-3 rounded-full"
			></div>
		</div>
	</div>
</section>

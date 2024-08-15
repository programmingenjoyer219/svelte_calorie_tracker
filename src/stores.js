import { writable, derived } from "svelte/store";

function generateRandomID() {
  return Math.random().toString(16).slice(2);
}

function createMealArray() {
  if (localStorage.getItem("meals") === null) {
    localStorage.setItem("meals", JSON.stringify([]));
  }
  let baseArray = JSON.parse(localStorage.getItem("meals"));
  const { subscribe, set, update } = writable(baseArray);

  return {
    subscribe,
    addMeal: (name, calories) => {
      update(mealArray => {
        const newMealArray = [...mealArray, { id: generateRandomID(), name, calories }];
        localStorage.setItem("meals", JSON.stringify(newMealArray));
        return newMealArray;
      })
    },
    removeMeal: (id) => {
      update(mealArray => {
        const newMealArray = mealArray.filter(m => m.id !== id);
        localStorage.setItem("meals", JSON.stringify(newMealArray));
        return newMealArray;
      })
    },
    reset: () => {
      set([]);
      localStorage.setItem("meals", JSON.stringify([]));
    },
  }
}

function createWorkoutArray() {
  if (localStorage.getItem("workouts") === null) {
    localStorage.setItem("workouts", JSON.stringify([]));
  }
  let baseArray = JSON.parse(localStorage.getItem("workouts"));
  const { subscribe, set, update } = writable(baseArray);

  return {
    subscribe,
    addWorkout: (name, calories) => {
      update(workoutArray => {
        const newWorkoutArray = [...workoutArray, { id: generateRandomID(), name, calories }];
        localStorage.setItem("workouts", JSON.stringify(newWorkoutArray));
        return newWorkoutArray;
      })
    },
    removeWorkout: (id) => {
      update(workoutArray => {
        const newWorkoutArray = workoutArray.filter(w => w.id !== id);
        localStorage.setItem("workouts", JSON.stringify(newWorkoutArray));
        return newWorkoutArray;
      })
    },
    reset: () => {
      set([]);
      localStorage.setItem("workouts", JSON.stringify([]));
    },
  }
}

function createDailyLimit() {
  if (localStorage.getItem("dailyLimit") === null) {
    localStorage.setItem("dailyLimit", "2000");
  }
  let baseValue = +localStorage.getItem("dailyLimit");
  const { subscribe, set, update } = writable(baseValue);

  return {
    subscribe,
    setValue: (value) => { set(value); localStorage.setItem("dailyLimit", `${value}`) },
    reset: () => { set(2000); localStorage.setItem("dailyLimit", "2000") }
  }
}

// independent stores
export const dailyLimit = createDailyLimit();
export const mealArray = createMealArray();
export const workoutArray = createWorkoutArray();
// derived / dependent stores
export const calorieConsumed = derived(mealArray, ($mealArray) => $mealArray.reduce((a, c) => a + c.calories, 0), 0);
export const calorieBurned = derived(workoutArray, ($workoutArray => $workoutArray.reduce((a, c) => a + c.calories, 0)), 0);
export const netCalorieIntake = derived([calorieConsumed, calorieBurned],
  ([$calorieConsumed, $calorieBurned]) => $calorieConsumed - $calorieBurned,
  0
);
export const caloriesRemaining = derived([dailyLimit, netCalorieIntake],
  ([$dailyLimit, $netCalorieIntake]) => $dailyLimit - $netCalorieIntake,
  0
);
export const progress = derived([netCalorieIntake, dailyLimit],
  ([$netCalorieIntake, $dailyLimit]) => Math.max(0, Math.min(Math.round($netCalorieIntake * 100 / $dailyLimit), 100)),
  0
);
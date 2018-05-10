export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR";

// These actions are payloads of information that you set up to describe any event in the application that should update that application’s state.
// Actions are JavaScript objects that describe any event that should update the application’s state.
export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal
  };
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}

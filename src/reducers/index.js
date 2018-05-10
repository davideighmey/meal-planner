import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from "../actions";
import { combineReducers } from "redux";

// A reducer receives the current state and an action that was dispatched, then decides how to transform the current state
// into a brand new state based on the action it received.
// A Reducer is Pure function
// The whole point of a reducer is that it takes in the current state, an action, and returns the new state.

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null
  }
};

function food(state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const { recipe } = action;

      return {
        ...state,
        [recipe.label]: recipe
      };
    default:
      return state;
  }
}

function calendar(state = initialCalendarState, action) {
  const { day, recipe, meal } = action;

  switch (action.type) {
    case ADD_RECIPE:
      return {
        //same state but modify the day
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label
        }
      };

    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      };

    default:
      return state;
  }
}

// The problem is that Redux’s createStore() method takes in a single reducer, not multiple
// This allows you to use reducer composition to manage the state in your store.
export default combineReducers({
  food,
  calendar
});

/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import { combineReducers } from "@reduxjs/toolkit";

import api from "../api";
import pokemonApi from "../api/pokemons";

/**
 * Merges the main reducer with the router state
 */
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export { rootReducer };

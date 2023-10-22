// src/stores/routeParams.js
import { writable } from 'svelte/store';

// Initialize the store with default values
const routeParams = writable({ id: null });

export default routeParams;

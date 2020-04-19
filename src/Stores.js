import { writable } from "svelte/store";

function createCitiesStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addCity: (city) => update((cities) => [...cities, city]),
    deleteCity: (cityToRemove) =>
      update((cities) =>
        cities.filter((city) => {
          if (city.id !== cityToRemove.id) {
            return city;
          }
        })
      ),
    reset: () => set(0),
  };
}

export default createCitiesStore();

import { writable } from "svelte/store";

function createCitiesStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addCity: (city) => update((cities) => [...cities, city]),
    deleteCity: (cityToRemove) =>
      update((cities) =>
        cities.filter((city) => {
          if (city.city !== cityToRemove) {
            return city;
          }
        })
      ),
    reset: () => set([]),
  };
}

export default createCitiesStore();

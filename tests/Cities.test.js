import cities from "../src/stores/Cities";
import City from "../src/City";
import "jest";

describe("[UNIT] Cities Store", () => {
  let newCity;

  beforeAll(() => {
    newCity = new City("calgary", "canada", [
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
      {
        datetime: "2020-05-15",
        low_temp: "5",
        high_temp: "50",
      },
    ]);
  });

  test("Should add a city", () => {
    let c = [];
    const sub = cities.subscribe((value) => {
      c = value;
    });

    expect(c).toStrictEqual([]);

    cities.addCity(newCity);

    expect(c).toContain(newCity);
  });

  test("Should delete a city", () => {
    let c = [];
    const sub = cities.subscribe((value) => {
      c = value;
    });

    cities.addCity(newCity);

    expect(c).toContain(newCity);

    cities.deleteCity("calgary");

    expect(c).toStrictEqual([]);
  });

  test("Should empty cities array on reset", () => {
    let c = [];
    const sub = cities.subscribe((value) => {
      c = value;
    });

    cities.addCity(newCity);
    cities.addCity(newCity);
    cities.addCity(newCity);
    cities.addCity(newCity);
    cities.addCity(newCity);

    expect(c.length).toBe(5);

    cities.reset();

    expect(c).toStrictEqual([]);
  });
});

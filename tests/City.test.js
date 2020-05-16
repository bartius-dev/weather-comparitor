import City from '../src/City';
import 'jest';

describe("[UNIT] City class", () => {
  test("first city will be labelled as base, all others are not", () => {
    let cities = [];

    for (let i = 0; i < 50; i++) {
      let newCity = new City("calgary", "canada", cities.length, [
        {
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },{
          "datetime": "2020-05-15",
          "low_temp": "5",
          "high_temp": "50"
        },
      ]);

      cities.push(newCity)
    }

    expect(cities[0].isBase).toBe(true);

    for (let i = 1; i < cities.length; i++) {
      expect(cities[i].isBase).toBe(false);
    }
  })

  test("providing a non-integer value for isBase will fail object creation", () => {
    // can't seem to provide any error handling inside the City class...
  })
})

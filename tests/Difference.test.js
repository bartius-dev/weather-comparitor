import Difference from "../src/components/Difference.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import each from "jest-each";

describe("[UNIT] <Difference />", () => {
  test("should render temperature, no difference", () => {
    const { getByText } = render(Difference, {
      weather: {
        dayOfWeek: "Sun",
        lowTempCelsius: 1,
        highTempCelsius: 12,
      },
      baseWeather: [
        { dayOfWeek: "Sun", lowTempCelsius: 1, highTempCelsius: 12 },
      ],
      cityIndex: 0,
    });
    let differenceSpan = document.getElementById("difference");
    !expect(differenceSpan).toBeVisible();

    expect(getByText("12")).toBeInTheDocument();
  });

  test("should render temperature and difference", () => {
    const { getByText } = render(Difference, {
      weather: {
        dayOfWeek: "Sun",
        lowTempCelsius: 1,
        highTempCelsius: 12,
      },
      baseWeather: [
        { dayOfWeek: "Sun", lowTempCelsius: 1, highTempCelsius: 12 },
        { dayOfWeek: "Mon", lowTempCelsius: 1, highTempCelsius: 13 },
      ],
      cityIndex: 1,
    });

    let differenceSpan = document.getElementById("difference");
    expect(differenceSpan).toBeVisible();

    expect(getByText("12")).toBeInTheDocument();
    expect(getByText("-1")).toBeInTheDocument();
  });

  each([
    [0, 0, "invisible"],
    [1, -16, "much-colder"],
    [2, -6, "colder"],
    [3, 5, "not-much-colder"],
    [4, 11, "warmer"],
    [5, 21, "hotter"],
    [6, 31, "much-hotter"],
  ]).test(
    "should render the appropriate text colour",
    (i, difference, colourClass) => {
      render(Difference, {
        weather: {
          dayOfWeek: "Sun",
          lowTempCelsius: 0,
          highTempCelsius: 0,
        },
        baseWeather: [
          { dayOfWeek: "Sun", lowTempCelsius: 0, highTempCelsius: 0 },
          { dayOfWeek: "Mon", lowTempCelsius: 1, highTempCelsius: 16 },
          { dayOfWeek: "Tue", lowTempCelsius: 3, highTempCelsius: 6 },
          { dayOfWeek: "Wed", lowTempCelsius: 3, highTempCelsius: -5 },
          { dayOfWeek: "Thu", lowTempCelsius: 3, highTempCelsius: -11 },
          { dayOfWeek: "Fri", lowTempCelsius: 4, highTempCelsius: -21 },
          { dayOfWeek: "Sat", lowTempCelsius: 5, highTempCelsius: -31 },
        ],
        cityIndex: i,
      });

      let differenceSpan = document.getElementById("difference");
      expect(differenceSpan).toHaveTextContent(difference);
      expect(differenceSpan).toHaveClass(colourClass);
    }
  );
});

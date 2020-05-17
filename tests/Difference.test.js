import Difference from "../src/components/Difference.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import each from "jest-each";

describe("[UNIT] <Difference />", () => {
  test("should render temperature, no difference", () => {
    const { getByText } = render(Difference, {
      weather: {
        dayOfWeek: "Sun",
        low: 1,
        high: 12,
      },
      baseWeather: [{ dayOfWeek: "Sun", low: 1, high: 12 }],
      index: 0,
    });
    let differenceSpan = document.getElementById("difference");
    !expect(differenceSpan).toBeVisible();

    expect(getByText("12")).toBeInTheDocument();
  });

  test("should render temperature and difference", () => {
    const { getByText } = render(Difference, {
      weather: {
        dayOfWeek: "Sun",
        low: 1,
        high: 12,
      },
      baseWeather: [
        { dayOfWeek: "Sun", low: 1, high: 12 },
        { dayOfWeek: "Mon", low: 1, high: 13 },
      ],
      index: 1,
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
          low: 0,
          high: 0,
        },
        baseWeather: [
          { dayOfWeek: "Sun", low: 0, high: 0 },
          { dayOfWeek: "Mon", low: 1, high: 16 },
          { dayOfWeek: "Tue", low: 3, high: 6 },
          { dayOfWeek: "Wed", low: 3, high: -5 },
          { dayOfWeek: "Thu", low: 3, high: -11 },
          { dayOfWeek: "Fri", low: 4, high: -21 },
          { dayOfWeek: "Sat", low: 5, high: -31 },
        ],
        index: i,
      });

      let differenceSpan = document.getElementById("difference");
      expect(differenceSpan).toHaveTextContent(difference);
      expect(differenceSpan).toHaveClass(colourClass);
    }
  );
});

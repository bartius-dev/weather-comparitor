import Difference from "../src/components/Difference.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";


test("should render just the weather elements", () => {
  const { getByText } = render(Difference, {
    weather: {
      dayOfWeek: "Sun",
      low: 1,
      high: 12},
    baseWeather: [{dayOfWeek: "Sun", low: 1, high: 12}, {dayOfWeek: "Mon", low: 1, high: 13}, {dayOfWeek: "Tue", low: 3, high: 17}, {dayOfWeek: "Wed", low: 3, high: 10}, {dayOfWeek: "Thu", low: 3, high: 11}, {dayOfWeek: "Fri", low: 4, high: 15}, {dayOfWeek: "Sat", low: 5, high: 17}, {dayOfWeek: "Sun", low: 2, high: 12}, {dayOfWeek: "Mon", low: 4, high: 12}, {dayOfWeek: "Tue", low: 6, high: 16}],
    index: 0
  });

  expect(getByText("12")).toBeInTheDocument();
  expect(getByText("0")).toBeInTheDocument();
  // expect(getByText(")).toBeInTheDOM();

});


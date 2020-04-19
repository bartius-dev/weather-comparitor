import Difference from "../src/components/Difference.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

test("should render just the weather elements", async () => {
  const { getByText } = render(Difference);

  expect(getByText("Welcome!")).toBeInTheDocument();
  expect(getByText("0")).toBeInTheDOM();

});


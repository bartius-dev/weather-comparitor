import App from "../src/App.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

test("should render a welcome message", async () => {
  const { getByText } = render(App);

  expect(getByText("Welcome!")).toBeInTheDocument();
});

test("should render instructions on what to do", async () => {
  const { getByText } = render(App);

  expect(getByText("type a city & country combo above!")).toBeInTheDocument();
});

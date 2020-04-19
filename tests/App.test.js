import App from "../src/components/App.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

describe("[UNIT] testing the App component", () =>  {
  beforeEach(() => {
    // can't render an element in the beforeEach
  });

  test("App to have the required text", () => {
    const { getByText } = render(App);
    let cityInput = document.getElementById("cityInput");
    let countryInput = document.getElementById("cityInput");
    expect(getByText("Welcome!")).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(getByText("Enter")).toBeInTheDocument();
    expect(getByText("type a city & country combo above!")).toBeInTheDocument();
  })
})

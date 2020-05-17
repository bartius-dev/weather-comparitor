import WeatherTable from "../src/components/WeatherTable.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

describe("[UNIT] <WeatherTable />", () => {
  test("should render instruction block and not a table", () => {
    // this has proven difficult to interact with the global store
    const { getByText } = render(WeatherTable);
    expect(getByText("type a city & country combo above!")).toBeInTheDocument();
  });
});

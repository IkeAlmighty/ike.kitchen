import { render, screen } from "@testing-library/react";
import AboutAndCallToAction from "./AboutAndCallToAction";

test("renders learn react link", () => {
  render(<AboutAndCallToAction />);
  const linkElement = screen.getByText(/browse products/i);
  expect(linkElement).toBeInTheDocument();
});

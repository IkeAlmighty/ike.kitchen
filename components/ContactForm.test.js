import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders learn react link", () => {
  render(<ContactForm />);
  const linkElement = screen.getByText(/send message/i);
  expect(linkElement).toBeInTheDocument();
});

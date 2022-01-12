import TextFieldComponent from ".";

import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(
    <TextFieldComponent
      label={"Name"}
      defaultValue={"John Doe"}
      required={true}
    />
  );

  const textElement = screen.getByText(/Name/i);
  expect(textElement).toBeInTheDocument();
});

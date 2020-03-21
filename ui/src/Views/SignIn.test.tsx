import React from "react";
import { render } from "@testing-library/react";
import SignIn from "./SignIn";

const mountComponent = () => {
  return render(<SignIn />);
};

describe("Sign-in is rendered", () => {
  let form: HTMLElement;
  beforeEach(() => {
    const { getByTestId } = mountComponent();
    form = getByTestId(/sign-in-form/);
  });
  it("renders", () => {
    expect(form).toBeInTheDocument();
  });
});

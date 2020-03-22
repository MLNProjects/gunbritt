import React from "react";
import { render } from "@testing-library/react";
import SignIn from "./SignIn";
import { Router } from "react-router-dom";
import { createBrowserHistory, History } from "history";

const history: History<null> = createBrowserHistory();

const mountComponent = () => {
  return render(
    <Router history={history}>
      <SignIn />
    </Router>
  );
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

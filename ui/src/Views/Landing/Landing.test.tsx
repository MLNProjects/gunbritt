import { createBrowserHistory, History } from "history";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import React from "react";
import Landing from "./Landing";

const history: History<null> = createBrowserHistory();

const mountComponent = (): RenderResult => {
  return render(
    <Router history={history}>
      <Landing />
    </Router>
  );
};

describe("when Landing is rendered", () => {
  let wrapper: RenderResult;
  let container: HTMLElement;
  beforeEach(() => {
    wrapper = mountComponent();
    container = wrapper.getByTestId(/landing-container/);
  });
  it("should render container", () => {
    expect(container).toBeInTheDocument();
  });
  describe("When clicking on signin", () => {
    beforeEach(() => {
      const signInBtn = wrapper.getByTestId(/landing-btn-signin/);
      fireEvent.click(signInBtn);
    });
    it("should send the user to signIn", () => {
      expect(window.location.pathname).toBe("/loggain");
    });
  });
  describe("When clicking on signup", () => {
    beforeEach(() => {
      const signUpBtn = wrapper.getByTestId(/landing-btn-signup/);
      fireEvent.click(signUpBtn);
    });
    it("should send the user to signIn", () => {
      expect(window.location.pathname).toBe("/registrera");
    });
  });
});

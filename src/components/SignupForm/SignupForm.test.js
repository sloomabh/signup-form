import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupForm from "./SignupForm";

describe("SignupForm component", () => {
  it("should display validation errors when entering empty firstname", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const firstnameInput = getByTestId("fname");

    // Enter invalid data
    fireEvent.change(firstnameInput, { target: { value: "" } });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(getByText("Please enter first name")).toBeTruthy();
  });

  it("should display validation errors when entering empty lasttname", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const lastnameInput = getByTestId("lname");

    // Enter invalid data
    fireEvent.change(lastnameInput, { target: { value: "" } });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(getByText("Please enter last name")).toBeTruthy();
  });

  it("should display validation errors when entering empty email", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const emailInput = getByTestId("email");

    // Enter invalid data
    fireEvent.change(emailInput, { target: { value: "" } });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(getByText("Please enter email address")).toBeTruthy();
  });

  it("should display validation errors when entering password length less then 12", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const passwordInput = getByTestId("password");

    // Enter invalid data
    fireEvent.change(passwordInput, { target: { value: "cscsc" } });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(
      getByText("Password must be at least 12 characters long")
    ).toBeTruthy();
  });

  it("should display validation errors when entering password diffremt to condition", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const passwordInput = getByTestId("password");

    // Enter invalid data
    fireEvent.change(passwordInput, { target: { value: "cscdddddddddddsc" } });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(
      getByText(
        "Password must contain at least 2 upper case letters, 2 numbers, and 2 symbols"
      )
    ).toBeTruthy();
  });

  it("should display validation errors when entering confirm password diffremt to password", () => {
    const { getByText, getByTestId } = render(<SignupForm />);

    const passwordInput = getByTestId("password");
    const confpasswordInput = getByTestId("confpassword");

    // Enter invalid data
    fireEvent.change(passwordInput, { target: { value: "AAbb11**11111" } });
    fireEvent.change(confpasswordInput, {
      target: { value: "AAbb11**11111555" },
    });

    const submitButton = getByText("sign up");
    fireEvent.click(submitButton);

    // Assert that validation error messages are displayed
    expect(getByText("Confirm password doesn't match Password")).toBeTruthy();
  });
});

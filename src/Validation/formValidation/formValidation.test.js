import formValidation from "./formValidation";

describe("formValidation function", () => {
  it("should return errors for invalid input  case1", () => {
    const values = {
      firstname: "",
      lastname: "",
      email: "",
      password: "Ab12!",
      confpassword: "Ab12!",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      firstname: "Please enter first name",
      lastname: "Please enter last name",
      email: "Please enter email address",
      password: "Password must be at least 12 characters long",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return errors for invalid input  case2", () => {
    const values = {
      firstname: "",
      lastname: "",
      email: "",
      password: "Ab12!",
      confpassword: "Ab1",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      firstname: "Please enter first name",
      lastname: "Please enter last name",
      email: "Please enter email address",
      password: "Password must be at least 12 characters long",
      confpassword: "Confirm password doesn't match Password",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return errors for invalid input  case3", () => {
    const values = {
      firstname: "",
      lastname: "ddd",
      email: "",
      password: "Ab12!",
      confpassword: "Ab1",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      firstname: "Please enter first name",
      email: "Please enter email address",
      password: "Password must be at least 12 characters long",
      confpassword: "Confirm password doesn't match Password",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return errors for invalid input  case4", () => {
    const values = {
      firstname: "",
      lastname: "ddd",
      email: "ddaa",
      password: "Ab12!",
      confpassword: "Ab1",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      firstname: "Please enter first name",
      email: "Please enter email address",
      password: "Password must be at least 12 characters long",
      confpassword: "Confirm password doesn't match Password",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return errors for invalid input case5", () => {
    const values = {
      firstname: "John",
      lastname: "Doe",
      email: "invalid-email",
      password: "password123",
      confpassword: "password123",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      email: "Please enter email address",
      password: "Password must be at least 12 characters long",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return errors for invalid input case6", () => {
    const values = {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      password: "Password123!",
      confpassword: "Password123!Different",
      checkbox: false,
    };

    const errors = formValidation(values);

    expect(errors).toEqual({
      password:
        "Password must contain at least 2 upper case letters, 2 numbers, and 2 symbols",
      confpassword: "Confirm password doesn't match Password",
      checkbox: "Please check terms and condions",
    });
  });

  it("should return no errors for valid input case7", () => {
    const values = {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      password: "StrongPassword123!",
      confpassword: "StrongPassword123!",
      checkbox: true,
    };

    const errors = formValidation(values);

    expect(Object.keys(errors).length).toBe(0);
  });
});

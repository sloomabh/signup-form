export default function formValidation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:\D*\d){2})(?=(?:[^\w\s]*[\w\s]){2})[A-Za-z\d\W\S]{8,}$/;

  // name field
  if (values.firstname === "") {
    errors.firstname = "Please enter first name";
  }

  // lastname field
  if (values.lastname === "") {
    errors.lastname = "Please enter last name";
  }

  // email field
  if (values.email === "" || !email_pattern.test(values.email)) {
    errors.email = "Please enter email address";
  }

  // password field
  if (values.password === "") {
    errors.password = "Please enter password";
  } else if (values.password.length < 12) {
    errors.password = "Password must be at least 12 characters long";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password must contain at least 2 upper case letters, 2 numbers, and 2 symbols";
  }

  // confpassword field
  if (values.confpassword === "") {
    errors.confpassword = "Please enter password";
  } else if (values.confpassword !== values.password) {
    errors.confpassword = "Confirm password doesn't match Password";
  }

  // checkbox field
  if (!values.checkbox) {
    errors.checkbox = "Please check terms and condions";
  }

  return errors;
}

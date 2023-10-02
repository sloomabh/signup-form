import { useState, useEffect } from "react";
import formValidation from "../../Validation/formValidation/formValidation";

const SignupForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confPasswordVisible, setConfPasswordVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handelInput(e) {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately
    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
    } else {
      const newObj = { ...values, [name]: value };
      setValues(newObj);
    }
  }

  function handilValidation(e) {
    e.preventDefault();
    const validationErrors = formValidation(values);
    setErrors(validationErrors);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confpassword: "",
      });
      alert("Form submitted successfully!");

      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfPasswordVisibility = () => {
    setConfPasswordVisible(!confPasswordVisible);
  };

  return (
    <div className="container">
      <div className="form">
        <h4 className="form__title">Sign up form</h4>
        <p className="form__subtitle">All fields are requiered</p>

        <form className="form__content" onSubmit={handilValidation} noValidate>
          <div className="form__content__box">
            <label className="form__content__box__label">First Name</label>
            <div className="form__content__box__field">
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                value={values.firstname}
                onChange={handelInput}
                style={{ borderColor: errors.firstname ? "red" : "" }}
                data-testid="fname"
              />
            </div>
          </div>

          {errors.firstname && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.firstname}</div>
            </div>
          )}

          <div className="form__content__box">
            <label className="form__content__box__label">Last Name</label>
            <div className="form__content__box__field">
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                onChange={handelInput}
                value={values.lastname}
                style={{ borderColor: errors.lastname ? "red" : "" }}
                data-testid="lname"
              />
            </div>
          </div>
          {errors.lastname && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.lastname}</div>
            </div>
          )}

          <div className="form__content__box">
            <label className="form__content__box__label" for="email">
              Email address
            </label>
            <div className="form__content__box__field">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handelInput}
                value={values.email}
                style={{ borderColor: errors.email ? "red" : "" }}
                data-testid="email"
              />
            </div>
          </div>
          {errors.email && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.email}</div>
            </div>
          )}

          <div className="form__content__box">
            <label className="form__content__box__label">Password</label>
            <div className="form__content__box__field  ">
              <div className="form__password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handelInput}
                  value={values.password}
                  style={{ borderColor: errors.password ? "red" : "" }}
                  data-testid="password"
                />
                <span
                  className="form__password-btn "
                  onClick={togglePasswordVisibility}
                  style={{
                    backgroundColor: passwordVisible ? "#9b59b6 " : "#c7c8cb",
                  }}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          </div>
          {errors.password && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.password}</div>
            </div>
          )}

          <div className="form__content__passnotice">
            <ul>
              <li> Minimum 12 characters</li>
              <li>
                Must contain at least 2 upper case letters ,2 numbers, and 2
                symbols
              </li>
            </ul>
          </div>

          <div className="form__content__box">
            <label className="form__content__box__label">
              Confirm password
            </label>
            <div className="form__content__box__field">
              <div className="form__password-input">
                <input
                  type={confPasswordVisible ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confpassword"
                  onChange={handelInput}
                  value={values.confpassword}
                  style={{ borderColor: errors.confpassword ? "red" : "" }}
                  data-testid="confpassword"
                />
                <span
                  className="form__password-btn"
                  onClick={toggleConfPasswordVisibility}
                  style={{
                    backgroundColor: confPasswordVisible
                      ? "#9b59b6 "
                      : "#c7c8cb",
                  }}
                >
                  {confPasswordVisible ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          </div>
          {errors.confpassword && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.confpassword}</div>
            </div>
          )}

          <div className="form__content__box form__content__box--checkbox">
            <label className="form__content__box__label" for="terms">
              Terms and Conditions
            </label>
            <div className="form__content__box__field ">
              <div className="form__checkbox-input">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={values.checkbox}
                  onChange={handelInput}
                  style={{ borderColor: errors.checkbox ? "red" : "" }}
                />
                <p className="form__checkbox-detail">
                  I agree to the terms and conditions
                </p>
              </div>
            </div>
          </div>

          {errors.checkbox && (
            <div className="form__content__error">
              <div className="form__error-name">{errors.checkbox}</div>
            </div>
          )}

          <div className="form__content__submit">
            <button className="form__submit-button" type="submit">
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { validateEmail } from "./utils";

import classes from "./SignUp.module.css";

const PasswordErrorMessage = () => {
  return (
    <p className={classes.fieldError}>
      Password should have at least 8 characters
    </p>
  );
};

export default function SignUp({ submitAPI }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    // Implement this function
    return firstName && validateEmail(email) && password.value.length >= 8;
  };

  const clearForm = () => {
    // Implement this function
    // clearForm sets each piece of state to its initial value after successful submission.
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  // To prevent the default behavior of the form when clicking on the submit button, you have to call preventDefault on the event object, right in your submit handler function.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      // test: 0,
      // occasion: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      submitAPI(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("You have to put your firstname"),
      email: Yup.string().required("You have to input your email"),
      password: Yup.number()
        // .min(1, "Provide a number between 1 and 10")
        // .max(10, "Provide a number between 1 and 10")
        .required("You have to provide a password"),
      // test: Yup.string().required(),
      // occasion: Yup.string().required("You have to pick an occasion"),
    }),
  });

  return (
    <section className={classes.signUpSection}>
      <div className={`fluidContainer ${classes.signUpPageContainer}`}>
        <div className="sectionTitle">
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit} className={classes.signUpDetails}>
          {/* <fieldset className={classes.signUpDetails}> */}
          <FormControl
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            className={classes.field}
          >
            <FormLabel
              htmlFor="firstName"
              fontWeight={600}
              fontSize="var(--font-lead-text)"
            >
              First name <sup>*</sup>
            </FormLabel>
            <Input
              className={classes.input}
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </FormControl>
          <FormErrorMessage>
            {formik.errors.firstName && (
              <div className={classes.errorContent}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {formik.errors.firstName}
              </div>
            )}
          </FormErrorMessage>
          <FormControl className={classes.field}>
            <FormLabel
              htmlFor="lastName"
              fontWeight={600}
              fontSize="var(--font-lead-text)"
            >
              Last name
            </FormLabel>
            <Input
              className={classes.input}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </FormControl>
          <FormControl className={classes.field}>
            <FormLabel fontWeight={600} fontSize="var(--font-lead-text)">
              Email address <sup>*</sup>
            </FormLabel>
            <Input
              className={classes.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </FormControl>
          <FormControl className={classes.field}>
            {/* The password input is a special case that has an object as state instead of a string. As a result, the state setter should spread the previous values so they don’t get overridden. Finally, to make sure the password characters are obscured, you need to use the type “password” for the input. */}
            <FormLabel fontWeight={600} fontSize="var(--font-lead-text)" s>
              Password <sup>*</sup>
            </FormLabel>
            <Input
              className={classes.input}
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </FormControl>
          {/* <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div> */}
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
          {/* </fieldset> */}
        </form>
      </div>
    </section>
  );
}

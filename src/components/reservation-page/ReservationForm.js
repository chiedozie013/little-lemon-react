import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import classes from "./ReservationForm.module.css";

export default function ReservationForm({
  availableTimes,
  occasions,
  updateTimes,
  isLoading,
  submitAPI,
}) {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      // test: 0,
      occasion: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      submitAPI(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("You have to pick a date"),
      time: Yup.string().required("You have to pick a time"),
      guests: Yup.number()
        .min(1, "Provide a number between 1 and 10")
        .max(10, "Provide a number between 1 and 10")
        .required("You have to provide at least 1 guest"),
      // test: Yup.string().required(),
      occasion: Yup.string().required("You have to pick an occasion"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel
          htmlFor="date"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose date
        </FormLabel>
        <Input
          className={classes.input}
          id="date"
          name="date"
          type="date"
          // {...formik.getFieldProps("date")}
          value={formik.values.date}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            updateTimes(e);
            formik.handleChange(e);
          }}
        />
        <FormErrorMessage>
          {formik.errors.date && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.date}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel
          htmlFor="time"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose time
        </FormLabel>
        <Select
          className={classes.input}
          id="time"
          name="time"
          placeholder="Select an appropriate time"
          {...formik.getFieldProps("time")}
        >
          {availableTimes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.time && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.time}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
        <FormLabel
          htmlFor="guests"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Number of guests
        </FormLabel>
        <input
          // className={classes.input}
          id="guests"
          name="guests"
          type="number"
          placeholder="A number between 1 and 10"
          min="1"
          max="10"
          step={1}
          className={`${classes.formNumberInput} ${
            formik.touched.guests && formik.errors.guests && classes.error
          }`}
          {...formik.getFieldProps("guests")}
        />
        <FormErrorMessage>
          {formik.errors.guests && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.guests}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel
          htmlFor="occasion"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Occasion
        </FormLabel>
        <Select
          className={classes.input}
          id="occasion"
          name="occasion"
          placeholder="Select an occasion"
          {...formik.getFieldProps("occasion")}
        >
          {occasions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.occasion && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.occasion}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <div style={{ marginTop: "1.5rem" }}>
        <button
          className={classes.submitButton}
          fullWidth={true}
          disabled={isLoading}
          isSubmit={true}
        >
          {isLoading ? (
            <span style={{ display: "inline-flex", gap: "1rem" }}>
              Loading
              <FontAwesomeIcon icon={faSpinner} spin />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}

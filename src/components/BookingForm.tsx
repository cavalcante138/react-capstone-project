import { Field, Form, Formik, FormikProps, useFormikContext } from "formik";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { submitAPI } from "../utils";

interface Props {
  availableTimes: string[];
  updateTimes: (selectedDate: Date) => void;
  onSubmitBooking: (values: any) => void;
}

export const BookingForm = (
  { availableTimes, updateTimes, onSubmitBooking }: Props
) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        numberGuests: 1,
        ocassion: "Birthday",
      }}
      onSubmit={(values, actions) => {
        if(submitAPI(values)) {
          onSubmitBooking(values);
          history.push("/booking-success");
        }else{
          toast.error("We are sorry, but the booking failed. Please try again later.");
        }
      }}
      validationSchema={Yup.object({
        date: Yup.date()
          .min(new Date(), "Date must be in the future")
          .required("Please select a date"),
        time: Yup.string()
          .required("Please select a time"),
        numberGuests: Yup.number()
          .min(1, "Must be at least 1")
          .max(10, "Must be at most 10"),
        ocassion: Yup.string()
          .required("Required"),
      })}
    >
      {(props: FormikProps<any>) => (
        <Form
          style={{ display: "grid", maxWidth: 200, gap: 20 }}
        >
          <label htmlFor="res-date">Choose date</label>
          <Field type="date"
            id="res-date"
            name="date"
            onChange={(e: any) => {
              updateTimes(new Date(e.target.value));
              props.setFieldValue("date", e.target.value);
            }}
            aria-describedby="Choose date"
          />
          {props.errors.date && props.touched.date ? (
             <div
             data-testid="error-validate"
             >{props.errors.date as string}</div>
           ) : null}
          <label htmlFor="res-time">Choose time</label>
          <Field as="select" name="time" id="res-time"
          aria-describedby="Choose time">
            <option value="">Select time</option>
            {availableTimes.map((time) => (
              <option 
              key={time} 
              value={time}
              data-testid="time-select"
              >{time}</option>
            ))}
          </Field>
          {props.errors.time && props.touched.time ? (
             <div>{props.errors.time as string}</div>
           ) : null}
          <label htmlFor="guests">Number of guests</label>
          <Field name="numberGuests" type="number" placeholder="1" min="1" max="10" id="guests"
          aria-describedby="Number of guests"
          />
                    {props.errors.numberGuests && props.touched.numberGuests ? (
             <div>{props.errors.numberGuests as string}</div>
           ) : null}
          <label htmlFor="occasion">Occasion</label>
          <Field as="select" name="ocassion" id="occasion"
          aria-describedby="Occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          {props.errors.occasion && props.touched.occasion ? (
             <div>{props.errors.occasion as string}</div>
           ) : null}
          <button type="submit"
          aria-label="On Click"
          data-testid="booking-submit"
            onClick={() => {

              console.log("props", props.values);
              
              // Verify yup errors and trigger it
              props.validateForm().then((errors) => {
                if (Object.keys(errors).length > 0) {
                  props.setErrors(errors);
                }
              });
              

              props.handleSubmit();

            }}
          >Teste</button>
        </Form>)}
    </Formik>);
}

import { Field, Form, Formik, FormikProps, useFormik } from "formik";
import * as Yup from 'yup';

export const BookingForm = () => {

  return (
    <Formik
      initialValues={{
        date: undefined,
        time: "17:00",
        numberGuests: 0,
        ocassion: "Birthday",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        console.log("enviou");
      }}
      validationSchema={Yup.object({
        date: Yup.date()
          .required("Required"),
        time: Yup.string()
          .required("Required"),
        numberGuests: Yup.number()
          .required("Required"),
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
          />
          <label htmlFor="res-time">Choose time</label>
          <Field as="select" name="time" id="res-time ">
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </Field>
          <label htmlFor="guests">Number of guests</label>
          <Field name="numberGuests" type="number" placeholder="1" min="1" max="10" id="guests" />
          <label htmlFor="occasion">Occasion</label>
          <Field as="select" name="ocassion" id="occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <button type="submit"
            onClick={() => {
              console.log(props.values);
              props.handleSubmit();

            }}
          >Teste</button>
        </Form>)}
    </Formik>);
}

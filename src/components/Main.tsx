import "../utils.scss";
import "../app.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI } from "../utils";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "../pages/HomePage";
import { BookingPage } from "../pages/BookingPage";
import { ConfirmedBooking } from "../pages/ConfirmedBooking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface ScheduleState {
  availableTimes: string[];
  scheduledDatesTimes: scheduleLemon[];
}

interface scheduleLemon {
  date: string;
  time: string;
}


const initialState = {
  availableTimes: [],
  scheduledDatesTimes: [],
};

const updateTimesReducer = (state: ScheduleState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, availableTimes: action.payload };
    case "SUBMIT_BOOKING":
      localStorage.setItem("booking", JSON.stringify([...state.scheduledDatesTimes, action.payload]));
      return { ...state, scheduledDatesTimes: [...state.scheduledDatesTimes, action.payload] };
    case "INITIALIZE_DATE_TIMES":
      return { ...state, scheduledDatesTimes: action.payload };
    default:
      return state;
  }
};




function Main() {

  const [state, dispatch] = useReducer(updateTimesReducer, initialState);
  
  const updateTimes = async (selectedDate: Date) => {
    // For now, the function can return the same available times regardless of the date.
    const times = await fetchAPI(selectedDate);

    // return scheduledTime.date === selectedDate.toISOString().substring(0, 10);

    state.scheduledDatesTimes.filter((scheduledTime : scheduleLemon) => {
      if(scheduledTime.date === selectedDate.toISOString().substring(0, 10)) {
        const findIndex = times.findIndex((time) => time === scheduledTime.time);
        if(findIndex !== -1) {
          times.splice(findIndex, 1);
        }
      }
    });


    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const initializeTimes = async () => {
    // get itens from local storage
    const scheduledDatesTimes = JSON.parse(localStorage.getItem("booking") || "[]");

    dispatch({ type: "INITIALIZE_DATE_TIMES", payload: scheduledDatesTimes });
  };

  const onSubmitBooking = async (
    values: { date: string; time: string; numberGuests: number; ocassion: string; }
  ) => {
    const booking = {
      date: values.date,
      time: values.time,
    };

    // Save to localStorage

    dispatch({ type: "SUBMIT_BOOKING", payload: booking });
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    console.log(state.scheduledDatesTimes);
  }, [state.scheduledDatesTimes]);

  return (
    <Router>
    <Header />
    <Switch>
          <Route path="/booking">
            <BookingPage availableTimes={state.availableTimes} 
            updateTimes={updateTimes}
            onSubmitBooking={onSubmitBooking}
            />
          </Route>
          <Route path="/booking-success">
            <ConfirmedBooking />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
    </Switch>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <Footer />
    </Router>
  );
}

export default Main;

import { render, screen, act, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { BookingForm } from "./components/BookingForm";
import Main from "./components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]}
    updateTimes={() => {
    } } onSubmitBooking={function (values: any): void {
      throw new Error("Function not implemented.");
    } } />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})



test('is initializeTimes returning a value?', async () => {

  await act( async () => render(<Main />, {wrapper: BrowserRouter}));

  await fireEvent.click(screen.getByTestId("booking-link"))
  await new Promise((r) => setTimeout(r, 2000));

  const dateSelectInput = await screen.getByLabelText("Choose date");

  await act(async () => {
    await fireEvent.change(dateSelectInput, { target: { value: "2023-09-01" } });
  });

  const timeSelectOptions = screen.queryAllByTestId("time-select");

  await waitFor(() => {
  expect(timeSelectOptions[1]).toHaveValue();
  })

})

test('is updateTimes returning a value?', async () => {

  await act( async () => render(<Main />, {wrapper: BrowserRouter}));

  await fireEvent.click(screen.getByTestId("booking-link"))
  await new Promise((r) => setTimeout(r, 1000));

  
  const dateSelectInput = await screen.getByLabelText("Choose date");

  await act(async () => {
    await fireEvent.change(dateSelectInput, { target: { value: "2023-09-01" } });
  });
  
  const timeSelectOptions = screen.queryAllByTestId("time-select");

  await waitFor(() => {
  expect(timeSelectOptions[1]).toHaveValue();
  })
})

test('Validate the form is submiting data', async () => {
      
    await act( async () => render(<Main />, {wrapper: BrowserRouter}));
  
    await fireEvent.click(screen.getByTestId("booking-link"))
    await new Promise((r) => setTimeout(r, 1000));
  
    
    const dateSelectInput = await screen.getByLabelText("Choose date");
  
    await act(async () => {
      await fireEvent.change(dateSelectInput, { target: { value: "2023-09-01" } });
    });

    const timeSelectOptions = screen.queryAllByTestId("time-select");

    const timeSelectInput = await screen.getByLabelText("Choose time");

    await act(async () => {
      // @ts-ignore
      await fireEvent.change(timeSelectInput, { target: { value: timeSelectOptions[1].value } });
    });

    // @ts-ignore
    expect(timeSelectInput).toHaveValue(timeSelectOptions[1].value);
    
  
    const numberOfGuests = await screen.getByLabelText("Number of guests");
    
    
    await act(async () => {
      await fireEvent.change(numberOfGuests, { target: { value: 2 } });
    });

    const SubmitButton = screen.getByTestId("booking-submit")

    await act(async () => {
      await fireEvent.click(SubmitButton);
    }
    );

    await new Promise((r) => setTimeout(r, 2000));
  

    await waitFor(() => {
      expect(screen.getByText("Your booking has been confirmed")).toBeInTheDocument();
    })
  
})


test('Does the form validate and trigger errors when submit', async () => {
      
  await act( async () => render(<Main />, {wrapper: BrowserRouter}));

  await fireEvent.click(screen.getByTestId("booking-link"))
  
  await new Promise((r) => setTimeout(r, 1000));

  const SubmitButton = screen.getByTestId("booking-submit")

  await act(async () => {
    await fireEvent.click(SubmitButton);
  }
  );

  await waitFor(() => {
    expect(screen.getByTestId("error-validate")).toBeInTheDocument();
  })

})


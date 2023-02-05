import { BookingForm } from "../components/BookingForm"

interface Props {
  availableTimes: string[];
  updateTimes: (selectedDate: Date) => void;
  onSubmitBooking: (values: any) => void;
}


export const BookingPage = ({
  availableTimes,
  updateTimes,
  onSubmitBooking
}: Props) => {
  return (
    <>
      <div className="container booking-page">
        <div className="row">
          <h2>Reserve a Table</h2>
        </div>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        onSubmitBooking={onSubmitBooking}
      />
    </>
  )
}
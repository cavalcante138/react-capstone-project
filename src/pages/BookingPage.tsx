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
    <div className="booking-page">
      <h1>Booking Page</h1>

      <BookingForm 
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      onSubmitBooking={onSubmitBooking}
      />
    </div>
  )
}
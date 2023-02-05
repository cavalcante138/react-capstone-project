import { AiFillCheckCircle } from 'react-icons/ai'

export const ConfirmedBooking = () => (
  <div className="confirmed-booking"
  data-testid="booking-success"
  >
    <h1>Confirmed Booking</h1>

    <p>
      <AiFillCheckCircle
        size={60}
        color="green" />
      Thank you for your booking.
    </p>
  </div>
)
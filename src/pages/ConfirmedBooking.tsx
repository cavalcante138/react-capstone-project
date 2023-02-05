import { AiFillCheckCircle } from 'react-icons/ai'
import './ConfirmedBooking.scss'

export const ConfirmedBooking = () => (
  <div className="confirmed-booking container"
  data-testid="booking-success"
  >
    <div className="row">
      <h2>Your booking has been confirmed</h2>
      <p>
        <AiFillCheckCircle
          size={60}
          color="green" />
        Thank you for your booking.
      </p>
    </div>
  </div>
)
import { useState } from 'react';
import BookingForm from '../components/BookingForm.jsx';
import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { getStoredBookings, seedTurfBookings } from '../utils/bookings.js';

export default function TurfBooking() {
  const [bookings, setBookings] = useState(() => getStoredBookings('asquare-turf-bookings', seedTurfBookings));
  return (
    <PageMotion>
      <section className="container-page py-20">
        <SectionHeader eyebrow="Turf Booking" title="Book the cricket turf without login" text="Choose date, start time and duration in Indian Standard Time. Saturday and Sunday are priced at Rs. 1000/hour; weekdays are Rs. 600/hour." />
        <BookingForm type="turf" bookings={bookings} setBookings={setBookings} />
      </section>
    </PageMotion>
  );
}

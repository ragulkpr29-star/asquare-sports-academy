import { useState } from 'react';
import BookingForm from '../components/BookingForm.jsx';
import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { getStoredBookings, seedBadmintonBookings } from '../utils/bookings.js';

export default function BadmintonBooking() {
  const [bookings, setBookings] = useState(() => getStoredBookings('asquare-badminton-bookings', seedBadmintonBookings));
  return (
    <PageMotion>
      <section className="container-page py-20">
        <SectionHeader eyebrow="Badminton Booking" title="Book Court 1 or Court 2" text="Live court availability in Indian Standard Time prevents overlapping bookings. Each court is Rs. 600/hour." />
        <BookingForm type="badminton" bookings={bookings} setBookings={setBookings} />
      </section>
    </PageMotion>
  );
}

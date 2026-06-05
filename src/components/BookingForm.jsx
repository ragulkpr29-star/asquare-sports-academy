import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { academy } from '../data/site.js';
import { createBooking } from '../services/firebase.js';
import { bookingNotificationLinks, formatIstTime, hours, hasOverlap, saveBookings, slotStatus, turfPrice, today } from '../utils/bookings.js';

export default function BookingForm({ type, bookings, setBookings }) {
  const isTurf = type === 'turf';
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: today(),
    court: 'Court 1',
    startTime: '05:00',
    duration: 1
  });
  const [message, setMessage] = useState('');
  const [notificationLinks, setNotificationLinks] = useState(null);
  const amount = isTurf ? turfPrice(form.date, form.duration) : 600 * Number(form.duration);
  const key = isTurf ? 'asquare-turf-bookings' : 'asquare-badminton-bookings';
  const selectedCourt = isTurf ? undefined : form.court;

  const available = useMemo(
    () => !hasOverlap(bookings, form, { court: selectedCourt }),
    [bookings, form, selectedCourt]
  );

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage('');
    setNotificationLinks(null);
  }

  async function submit(event) {
    event.preventDefault();
    if (!available) {
      setMessage('That slot overlaps with an existing booking. Please choose another time.');
      return;
    }
    const booking = await createBooking(isTurf ? 'turf_bookings' : 'badminton_bookings', {
      ...form,
      duration: Number(form.duration),
      amount
    });
    const next = [...bookings, booking];
    setBookings(next);
    saveBookings(key, next);
    setNotificationLinks(bookingNotificationLinks(academy, booking, type));
    setMessage('Booking request submitted. Status is pending until admin approval.');
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={submit} className="rounded-lg bg-white p-6 shadow-glow">
        <div className="grid gap-4">
          <label className="text-sm font-semibold text-slate-700">
            Full Name
            <input required className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.name} onChange={(event) => update('name', event.target.value)} />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Mobile Number
            <input required pattern="[0-9]{10}" className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.phone} onChange={(event) => update('phone', event.target.value)} />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Booking Date
            <input type="date" min={today()} required className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.date} onChange={(event) => update('date', event.target.value)} />
          </label>
          {!isTurf && (
            <label className="text-sm font-semibold text-slate-700">
              Court
              <select className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.court} onChange={(event) => update('court', event.target.value)}>
                <option>Court 1</option>
                <option>Court 2</option>
              </select>
            </label>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Start Time (IST)
              <select className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.startTime} onChange={(event) => update('startTime', event.target.value)}>
                {hours.slice(0, -1).map((hour) => (
                  <option key={hour} value={hour}>{formatIstTime(hour)}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Duration
              <select className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" value={form.duration} onChange={(event) => update('duration', Number(event.target.value))}>
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
              </select>
            </label>
          </div>
          <div className="rounded-lg bg-brand-light p-5">
            <p className="text-sm font-semibold text-slate-600">Total Price</p>
            <p className="font-display text-3xl font-extrabold text-brand-ink">Rs. {amount}</p>
            <p className="mt-1 text-xs text-slate-500">
              {isTurf ? 'Weekdays Rs. 600/hour, Saturday and Sunday Rs. 1000/hour. All times are IST.' : 'Badminton court price is Rs. 600/hour. All times are IST.'}
            </p>
          </div>
          <button className="rounded-lg bg-brand-teal px-6 py-4 font-bold text-white shadow-glow transition hover:bg-teal-600" type="submit">
            Submit Booking
          </button>
          {message && (
            <div className={`rounded-lg p-3 text-sm font-semibold ${available ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <p className="flex items-center gap-2">
                {available ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                {message}
              </p>
              {notificationLinks && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="rounded-lg bg-green-600 px-4 py-2 text-white" href={notificationLinks.whatsapp} target="_blank" rel="noreferrer">
                    Notify WhatsApp
                  </a>
                  <a className="rounded-lg bg-brand-teal px-4 py-2 text-white" href={notificationLinks.email}>
                    Notify Email
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-bold text-brand-ink">Live Availability</h2>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="rounded-full status-available px-3 py-1">Available</span>
            <span className="rounded-full status-pending px-3 py-1">Pending</span>
            <span className="rounded-full status-booked px-3 py-1">Booked</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {hours.slice(0, -1).map((hour) => {
            const status = slotStatus(bookings, form.date, hour, selectedCourt);
            const className = status === 'approved' ? 'status-booked' : status === 'pending' ? 'status-pending' : 'status-available';
            return (
              <button
                key={hour}
                type="button"
                disabled={status !== 'available'}
                onClick={() => update('startTime', hour)}
                className={`rounded-lg px-3 py-4 text-sm font-bold transition ${className} ${form.startTime === hour ? 'ring-2 ring-brand-teal ring-offset-2' : ''}`}
              >
                {formatIstTime(hour)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

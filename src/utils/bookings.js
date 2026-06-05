export const timeZone = 'Asia/Kolkata';
export const hours = Array.from({ length: 16 }, (_, index) => `${String(index + 5).padStart(2, '0')}:00`);

export const seedTurfBookings = [
  { id: 't1', name: 'Arun Kumar', phone: '9876543210', date: today(), startTime: '18:00', duration: 2, amount: 2000, status: 'approved', createdAt: new Date().toISOString() },
  { id: 't2', name: 'Practice Squad', phone: '9898989898', date: today(1), startTime: '06:00', duration: 1, amount: 600, status: 'pending', createdAt: new Date().toISOString() }
];

export const seedBadmintonBookings = [
  { id: 'b1', name: 'Meena', phone: '9000000001', court: 'Court 1', date: today(), startTime: '07:00', duration: 1, amount: 600, status: 'approved', createdAt: new Date().toISOString() },
  { id: 'b2', name: 'Karthik', phone: '9000000002', court: 'Court 2', date: today(), startTime: '19:00', duration: 2, amount: 1200, status: 'pending', createdAt: new Date().toISOString() }
];

export function today(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function indianDateTime(date = new Date()) {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone,
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export function formatIstTime(time) {
  const [rawHour, minute] = time.split(':').map(Number);
  const period = rawHour >= 12 ? 'PM' : 'AM';
  const hour = rawHour % 12 || 12;
  return `${hour}:${String(minute).padStart(2, '0')} ${period} IST`;
}

export function bookingNotificationLinks(academy, booking, type) {
  const sport = type === 'turf' ? 'Turf' : `Badminton ${booking.court}`;
  const details = [
    `New ${sport} booking request`,
    `Name: ${booking.name}`,
    `Mobile: ${booking.phone}`,
    `Date: ${booking.date}`,
    `Time: ${formatIstTime(booking.startTime)}`,
    `Duration: ${booking.duration} hour(s)`,
    `Amount: Rs. ${booking.amount}`,
    `Status: ${booking.status}`
  ].join('\n');
  return {
    whatsapp: `https://wa.me/91${academy.whatsappNumber}?text=${encodeURIComponent(details)}`,
    email: `mailto:${academy.email}?subject=${encodeURIComponent(`New ${sport} Booking`)}&body=${encodeURIComponent(details)}`
  };
}

export function getStoredBookings(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

export function saveBookings(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function durationSlots(startTime, duration) {
  const start = Number(startTime.slice(0, 2));
  return Array.from({ length: Number(duration) }, (_, index) => `${String(start + index).padStart(2, '0')}:00`);
}

export function isWeekend(date) {
  const day = new Date(`${date}T00:00:00`).getDay();
  return day === 0 || day === 6;
}

export function turfPrice(date, duration) {
  return (isWeekend(date) ? 1000 : 600) * Number(duration || 1);
}

export function hasOverlap(bookings, next, options = {}) {
  const nextSlots = durationSlots(next.startTime, next.duration);
  return bookings.some((booking) => {
    if (booking.date !== next.date || booking.status === 'rejected') return false;
    if (options.court && booking.court !== options.court) return false;
    return durationSlots(booking.startTime, booking.duration).some((slot) => nextSlots.includes(slot));
  });
}

export function slotStatus(bookings, date, slot, court) {
  const match = bookings.find((booking) => {
    if (booking.date !== date || booking.status === 'rejected') return false;
    if (court && booking.court !== court) return false;
    return durationSlots(booking.startTime, booking.duration).includes(slot);
  });
  return match?.status || 'available';
}

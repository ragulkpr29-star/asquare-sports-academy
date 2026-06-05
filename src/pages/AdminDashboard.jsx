import { Download, LogOut, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { adminCards } from '../data/site.js';
import { formatIstTime, getStoredBookings, indianDateTime, saveBookings, seedBadmintonBookings, seedTurfBookings, today } from '../utils/bookings.js';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [turf, setTurf] = useState(() => getStoredBookings('asquare-turf-bookings', seedTurfBookings));
  const [badminton, setBadminton] = useState(() => getStoredBookings('asquare-badminton-bookings', seedBadmintonBookings));
  const todayIST = today();
  const all = [...turf, ...badminton];
  const todayTurf = turf.filter((item) => item.date === todayIST);
  const todayBadminton = badminton.filter((item) => item.date === todayIST);
  const todayApprovedTurf = todayTurf.filter((item) => item.status === 'approved');
  const todayApprovedBadminton = todayBadminton.filter((item) => item.status === 'approved');
  const todayTurfRevenue = todayApprovedTurf.reduce((sum, item) => sum + Number(item.amount), 0);
  const todayBadmintonRevenue = todayApprovedBadminton.reduce((sum, item) => sum + Number(item.amount), 0);
  const todayTotalRevenue = todayTurfRevenue + todayBadmintonRevenue;
  const cardValues = [
    todayTurf.length,
    todayBadminton.length,
    `Rs. ${todayTurfRevenue}`,
    `Rs. ${todayTotalRevenue}`,
    all.filter((item) => item.date >= todayIST).length
  ];

  function logout() {
    localStorage.removeItem('asquare-admin');
    navigate('/secure-admin');
  }

  function update(kind, id, status) {
    const setter = kind === 'turf' ? setTurf : setBadminton;
    const key = kind === 'turf' ? 'asquare-turf-bookings' : 'asquare-badminton-bookings';
    setter((current) => {
      const next = status === 'delete' ? current.filter((item) => item.id !== id) : current.map((item) => (item.id === id ? { ...item, status } : item));
      saveBookings(key, next);
      return next;
    });
  }

  function exportCsv() {
    const rows = [['Type', 'Name', 'Phone', 'Court', 'Date', 'Time', 'Duration', 'Amount', 'Status'], ...turf.map((item) => ['Turf', item.name, item.phone, '', item.date, formatIstTime(item.startTime), item.duration, item.amount, item.status]), ...badminton.map((item) => ['Badminton', item.name, item.phone, item.court, item.date, formatIstTime(item.startTime), item.duration, item.amount, item.status])];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    link.download = 'asquare-bookings.csv';
    link.click();
  }

  return (
    <main className="min-h-screen bg-brand-light">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-page flex h-20 items-center justify-between">
          <Logo />
          <button onClick={logout} className="flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white"><LogOut size={17} /> Logout</button>
        </div>
      </header>
      <section className="container-page py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-teal">Admin Dashboard</p>
            <h1 className="font-display text-4xl font-extrabold text-brand-ink">Bookings and Revenue</h1>
            <p className="mt-2 text-sm font-semibold text-slate-500">Indian time: {indianDateTime()}</p>
          </div>
          <button onClick={exportCsv} className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-3 font-bold text-slate-950"><Download size={18} /> Export CSV</button>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {adminCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={card.label} className="rounded-lg bg-white p-5 shadow-sm">
                <Icon className="text-brand-teal" />
                <p className="mt-4 text-sm font-semibold text-slate-500">{card.label}</p>
                <p className="font-display text-3xl font-extrabold text-brand-ink">{cardValues[index]}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <SummaryCard label="People booked turf today" value={todayTurf.length} detail={`${todayApprovedTurf.length} approved, ${todayTurf.filter((item) => item.status === 'pending').length} pending`} />
          <SummaryCard label="People booked badminton today" value={todayBadminton.length} detail={`${todayApprovedBadminton.length} approved, ${todayBadminton.filter((item) => item.status === 'pending').length} pending`} />
          <SummaryCard label="Amount collected today" value={`Rs. ${todayTotalRevenue}`} detail={`Turf Rs. ${todayTurfRevenue} + Badminton Rs. ${todayBadmintonRevenue}`} />
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
          <Search className="text-slate-400" size={20} />
          <input className="w-full outline-none" placeholder="Search by name, phone, date or status" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <BookingTable title="Turf Bookings" kind="turf" rows={turf} query={query} onAction={update} />
        <BookingTable title="Badminton Bookings" kind="badminton" rows={badminton} query={query} onAction={update} />
      </section>
    </main>
  );
}

function SummaryCard({ label, value, detail }) {
  return (
    <article className="rounded-lg border border-teal-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 font-display text-3xl font-extrabold text-brand-teal">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{detail}</p>
    </article>
  );
}

function BookingTable({ title, kind, rows, query, onAction }) {
  const filtered = useMemo(() => rows.filter((item) => JSON.stringify(item).toLowerCase().includes(query.toLowerCase())), [rows, query]);
  return (
    <section className="mt-8 overflow-hidden rounded-lg bg-white shadow-sm">
      <h2 className="border-b border-slate-100 p-5 font-display text-2xl font-bold text-brand-ink">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>{['Name', 'Phone', kind === 'badminton' ? 'Court' : null, 'Date', 'Time', 'Duration', 'Amount', 'Status', 'Actions'].filter(Boolean).map((head) => <th key={head} className="px-5 py-4">{head}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-5 py-4 font-semibold">{item.name}</td>
                <td className="px-5 py-4">{item.phone}</td>
                {kind === 'badminton' && <td className="px-5 py-4">{item.court}</td>}
                <td className="px-5 py-4">{item.date}</td>
                <td className="px-5 py-4">{formatIstTime(item.startTime)}</td>
                <td className="px-5 py-4">{item.duration} hr</td>
                <td className="px-5 py-4">Rs. {item.amount}</td>
                <td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${item.status === 'approved' ? 'status-available' : item.status === 'rejected' ? 'status-booked' : 'status-pending'}`}>{item.status}</span></td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button className="rounded bg-green-50 px-3 py-2 font-bold text-green-700" onClick={() => onAction(kind, item.id, 'approved')}>Approve</button>
                    <button className="rounded bg-amber-50 px-3 py-2 font-bold text-amber-700" onClick={() => onAction(kind, item.id, 'rejected')}>Reject</button>
                    <button className="rounded bg-red-50 px-3 py-2 font-bold text-red-700" onClick={() => onAction(kind, item.id, 'delete')}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

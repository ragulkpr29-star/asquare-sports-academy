import { Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { academy } from '../data/site.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') || '').trim().toLowerCase();
    const password = String(data.get('password') || '').trim();
    if (email === academy.email && password === academy.adminPassword) {
      localStorage.setItem('asquare-admin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid admin email or password.');
    }
  }

  return (
    <main className="grid min-h-screen place-items-center sports-gradient p-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg bg-white p-8 shadow-glow">
        <Logo />
        <div className="mt-8 grid h-14 w-14 place-items-center rounded-lg bg-teal-50 text-brand-teal">
          <Lock />
        </div>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-brand-ink">Secure Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">Protected dashboard for bookings, approvals and revenue tracking.</p>
        <div className="mt-6 grid gap-4">
          <input name="email" type="email" defaultValue={academy.email} className="rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="Email" />
          <input name="password" type="password" className="rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="Password" />
          <button className="rounded-lg bg-brand-teal px-6 py-4 font-bold text-white">Login</button>
          {error && <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
          <p className="text-xs text-slate-500">Use the academy email and phone number as the current admin password. Firebase Authentication hooks are ready for production.</p>
        </div>
      </form>
    </main>
  );
}

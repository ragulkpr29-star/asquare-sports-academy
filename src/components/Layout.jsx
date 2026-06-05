import { CalendarDays, Camera, Clock, Dumbbell, Home, Images, Info, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { academy, navLinks } from '../data/site.js';
import Logo from './Logo.jsx';

const footerLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: Info },
  { label: 'Programs', to: '/programs', icon: Dumbbell },
  { label: 'Turf Booking', to: '/turf-booking', icon: CalendarDays },
  { label: 'Badminton', to: '/badminton-booking', icon: CalendarDays },
  { label: 'Gallery', to: '/gallery', icon: Images },
  { label: 'Contact', to: '/contact', icon: Phone },
  { label: 'Admin', to: '/secure-admin', icon: ShieldCheck }
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-light">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container-page flex h-20 items-center justify-between">
          <NavLink to="/" aria-label="A Square Sports Academy home">
            <Logo light />
          </NavLink>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-brand-teal text-white shadow-glow' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            className="hidden items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-bold text-slate-950 shadow-gold sm:flex"
            href={`tel:${academy.phone}`}
          >
            <Phone size={17} /> Call Now
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="container-page grid gap-2 pb-5 lg:hidden" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="relative overflow-hidden bg-slate-950 py-14 text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1.2fr_1fr_1.15fr]">
          <section>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Elite cricket coaching, turf play, badminton courts and fitness support in Vijayapuri.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-4 py-2 text-sm font-bold text-white shadow-glow" href={academy.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> WhatsApp {academy.whatsappNumber}
              </a>
              <a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-teal" href={`mailto:${academy.email}`}>
                <Mail size={17} /> Email Us
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold">Quick Links</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink key={link.to} to={link.to} className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
                    <Icon size={16} /> {link.label}
                  </NavLink>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold">Reach Us</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a className="flex items-start gap-3 rounded-lg bg-white/5 p-3 transition hover:bg-white/10" href={academy.maps} target="_blank" rel="noreferrer">
                <MapPin className="mt-0.5 shrink-0 text-brand-gold" size={18} />
                <span>{academy.address}</span>
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition hover:bg-white/10" href={`tel:${academy.phone}`}>
                <Phone className="text-brand-gold" size={18} />
                <span>{academy.phone}</span>
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition hover:bg-white/10" href={`mailto:${academy.email}`}>
                <Mail className="text-brand-gold" size={18} />
                <span>{academy.email}</span>
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition hover:bg-white/10" href={academy.instagram} target="_blank" rel="noreferrer">
                <Camera className="text-brand-gold" size={18} />
                <span>{academy.instagramId}</span>
              </a>
              <p className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <Clock className="text-brand-gold" size={18} />
                <span>{academy.hours}</span>
              </p>
            </div>
          </section>
        </div>
        <div className="container-page relative mt-10 border-t border-white/10 pt-5 text-center text-xs font-semibold text-slate-400">
          A Square Sports Academy. Where Talent Meets Opportunity.
        </div>
      </footer>
    </div>
  );
}

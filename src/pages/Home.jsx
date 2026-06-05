import { Link } from 'react-router-dom';
import FacilityCard from '../components/FacilityCard.jsx';
import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { academy, facilities, galleryItems, images, stats, testimonials } from '../data/site.js';

export default function Home() {
  return (
    <PageMotion>
      <section className="relative overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={images.hero} alt="Cricket academy facility" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="container-page relative flex min-h-[calc(100vh-80px)] items-center py-20">
          <div className="max-w-4xl text-white">
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">{academy.tagline}</p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-tight md:text-7xl">A Square Sports Academy</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Elite training, professional coaching, world-class facilities and premium sports experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="rounded-lg bg-brand-teal px-7 py-4 font-bold text-white shadow-glow" to="/turf-booking">
                Book Turf
              </Link>
              <Link className="rounded-lg bg-brand-gold px-7 py-4 font-bold text-slate-950 shadow-gold" to="/badminton-booking">
                Book Badminton
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page -mt-14 relative z-10 grid gap-4 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-lg bg-white p-6 text-center shadow-glow">
            <p className="font-display text-3xl font-extrabold text-brand-teal">{value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-20">
        <SectionHeader centered eyebrow="Why Choose Us" title="Everything an athlete needs in one academy" text="Train with intent, book facilities smoothly, and build routines around a campus that supports cricket, badminton and fitness." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => <FacilityCard key={item.title} item={item} />)}
        </div>
      </section>

      <section className="sports-gradient py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <img className="h-full min-h-96 rounded-lg object-cover shadow-glow" src={images.turf} alt="Turf ground facility" />
          <div className="flex flex-col justify-center">
            <SectionHeader eyebrow="Facilities Showcase" title="Premium spaces for practice, play and progress" text="From structured cricket coaching to flexible hourly bookings, the academy is built for daily use and long-term player development." />
            <div className="grid gap-4 sm:grid-cols-2">
              {['Bowling Machine', 'Practice Nets', 'Own Gym', '2 Badminton Courts'].map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 font-bold text-brand-ink shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeader eyebrow="Gallery Preview" title="A quick look at the academy" />
        <div className="grid gap-5 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <img key={item.id} className="h-72 rounded-lg object-cover shadow-sm" src={item.image} alt={item.title} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeader centered eyebrow="Testimonials" title="Trusted by players and families" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-lg border border-slate-200 p-6 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">"{item.text}"</p>
                <footer className="mt-5 font-bold text-brand-ink">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-lg bg-brand-teal p-8 text-white shadow-glow md:p-12">
          <h2 className="font-display text-3xl font-extrabold">Ready to train or book a session?</h2>
          <p className="mt-3 max-w-2xl text-teal-50">Call, WhatsApp or book online. Open Sunday to Saturday, 5:00 AM - 9:00 PM IST.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-white px-6 py-3 font-bold text-brand-teal" href={`tel:${academy.phone}`}>Call Now</a>
            <a className="rounded-lg bg-brand-gold px-6 py-3 font-bold text-slate-950" href={academy.whatsapp}>WhatsApp</a>
          </div>
        </div>
      </section>
    </PageMotion>
  );
}

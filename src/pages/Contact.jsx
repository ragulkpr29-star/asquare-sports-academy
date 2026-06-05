import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { academy } from '../data/site.js';

export default function Contact() {
  return (
    <PageMotion>
      <section className="container-page grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="A Square Sports Academy" text="Reach out for coaching, turf booking, badminton court availability or academy visits." />
          <div className="grid gap-4">
            <ContactItem icon={MapPin} label="Address" value={academy.address} />
            <ContactItem icon={Phone} label="Phone" value={academy.phone} href={`tel:${academy.phone}`} />
            <ContactItem icon={Mail} label="Email" value={academy.email} href={`mailto:${academy.email}`} />
            <ContactItem icon={Camera} label="Instagram" value={academy.instagramId} href={academy.instagram} />
            <ContactItem icon={Phone} label="Hours" value={academy.hours} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-brand-teal px-6 py-3 font-bold text-white shadow-glow" href={academy.whatsapp}>WhatsApp {academy.whatsappNumber}</a>
            <a className="rounded-lg bg-brand-gold px-6 py-3 font-bold text-slate-950 shadow-gold" href={`tel:${academy.phone}`}>Call Now</a>
          </div>
        </div>
        <form className="rounded-lg bg-white p-6 shadow-glow">
          <h2 className="font-display text-2xl font-bold text-brand-ink">Send a Message</h2>
          <div className="mt-6 grid gap-4">
            <input required className="rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="Your name" />
            <input required className="rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="Phone number" />
            <input type="email" className="rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="Email address" />
            <textarea className="min-h-36 rounded-lg border border-slate-200 px-4 py-3 outline-brand-teal" placeholder="How can we help?" />
            <button type="submit" className="rounded-lg bg-brand-teal px-6 py-4 font-bold text-white">Submit Enquiry</button>
          </div>
        </form>
      </section>
      <section className="container-page pb-20">
        <iframe
          className="h-96 w-full rounded-lg border-0 shadow-sm"
          title="A Square Sports Academy location"
          loading="lazy"
          src="https://www.google.com/maps?q=Vaipadi%20Rd%2C%20Vijayapuri%2C%20Tamil%20Nadu%20638056&output=embed"
        />
      </section>
    </PageMotion>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const body = <span className="text-sm leading-7 text-slate-600">{value}</span>;
  return (
    <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-50 text-brand-teal"><Icon size={22} /></div>
      <div>
        <p className="font-bold text-brand-ink">{label}</p>
        {href ? <a href={href}>{body}</a> : body}
      </div>
    </div>
  );
}

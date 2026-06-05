import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { facilities, images, timeline } from '../data/site.js';

export default function About() {
  return (
    <PageMotion>
      <section className="sports-gradient py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="About" title="A sports academy built for opportunity" text="A Square Sports Academy supports serious training, disciplined practice and accessible facility booking for Vijayapuri and nearby communities." />
            <p className="leading-8 text-slate-600">The academy brings together cricket coaching, turf play, practice nets, machine-assisted batting, gym training and badminton courts so athletes can develop skills in one dependable environment.</p>
          </div>
          <img className="h-96 rounded-lg object-cover shadow-glow" src={images.cricket} alt="Cricket training" />
        </div>
      </section>
      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {timeline.map(([title, text], index) => (
            <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-teal font-bold text-white">{index + 1}</span>
              <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Sports Facility Overview" title="Infrastructure for daily progress" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div key={item.title} className="rounded-lg bg-brand-light p-5">
                <h3 className="font-display font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageMotion>
  );
}

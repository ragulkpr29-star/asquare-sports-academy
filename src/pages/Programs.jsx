import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images } from '../data/site.js';

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const areas = ['Batting', 'Bowling', 'Fielding', 'Fitness', 'Match Preparation'];
const special = ['Bowling Machine', 'Practice Nets', 'Match Simulation', 'Fitness Gym'];

export default function Programs() {
  return (
    <PageMotion>
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionHeader eyebrow="Coaching Programs" title="Cricket coaching for every stage" text="Clear pathways help players build fundamentals, sharpen match skills and grow into confident competitors." />
          <div className="grid gap-4 sm:grid-cols-3">
            {levels.map((level) => <div className="rounded-lg bg-white p-5 text-center font-display font-bold shadow-sm" key={level}>{level}</div>)}
          </div>
        </div>
        <img className="h-96 rounded-lg object-cover shadow-glow" src={images.nets} alt="Practice nets" />
      </section>
      <section className="sports-gradient py-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <ProgramList title="Training Areas" items={areas} />
          <ProgramList title="Special Facilities" items={special} />
        </div>
      </section>
    </PageMotion>
  );
}

function ProgramList({ title, items }) {
  return (
    <article className="rounded-lg bg-white p-7 shadow-sm">
      <h2 className="font-display text-2xl font-bold text-brand-ink">{title}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => <div key={item} className="rounded-lg bg-brand-light px-4 py-3 font-semibold text-slate-700">{item}</div>)}
      </div>
    </article>
  );
}

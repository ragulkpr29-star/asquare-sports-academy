import { X } from 'lucide-react';
import { useState } from 'react';
import PageMotion from '../components/PageMotion.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { galleryItems } from '../data/site.js';

const categories = ['All', 'Cricket Coaching', 'Turf Ground', 'Practice Nets', 'Bowling Machine', 'Gym', 'Badminton Courts'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [preview, setPreview] = useState(null);
  const filtered = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <PageMotion>
      <section className="container-page py-20">
        <SectionHeader eyebrow="Gallery" title="Facilities, coaching and match-day energy" text="Filter through cricket coaching, turf ground, nets, bowling machine, gym and badminton court moments." />
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-bold ${active === category ? 'bg-brand-teal text-white' : 'bg-white text-slate-700 shadow-sm'}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <button key={item.id} className="mb-5 block w-full overflow-hidden rounded-lg bg-white text-left shadow-sm" onClick={() => setPreview(item)}>
              <img className={`w-full object-cover ${index % 2 ? 'h-72' : 'h-96'}`} src={item.image} alt={item.title} />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal">{item.category}</p>
                <h2 className="mt-1 font-display font-bold text-brand-ink">{item.title}</h2>
              </div>
            </button>
          ))}
        </div>
      </section>
      {preview && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4" role="dialog" aria-modal="true">
          <div className="relative max-w-4xl overflow-hidden rounded-lg bg-white">
            <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90" onClick={() => setPreview(null)} aria-label="Close preview">
              <X />
            </button>
            <img className="max-h-[78vh] w-full object-cover" src={preview.image} alt={preview.title} />
            <div className="p-5">
              <p className="text-sm font-bold text-brand-teal">{preview.category}</p>
              <h2 className="font-display text-2xl font-bold">{preview.title}</h2>
            </div>
          </div>
        </div>
      )}
    </PageMotion>
  );
}

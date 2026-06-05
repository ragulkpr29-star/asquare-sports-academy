export default function FacilityCard({ item }) {
  const Icon = item.icon;
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-brand-teal">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
    </article>
  );
}

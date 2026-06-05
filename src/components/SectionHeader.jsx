export default function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">{eyebrow}</p>
      <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

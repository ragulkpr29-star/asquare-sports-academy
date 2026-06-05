export default function Logo({ compact = false, light = false }) {
  return (
    <div className={`flex items-center ${compact ? '' : 'gap-3'}`}>
      <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-glow ring-1 ring-slate-100">
        <svg viewBox="0 0 84 84" className="h-12 w-12 shrink-0" role="img" aria-label="A Sports Academy logo mark">
          <path d="M16 72 37 18c2-5 9-5 11 0l20 54H54L45 47H32L24 72H16Z" fill="#00A99D" />
          <path d="M35 18 18 72h13l16-49c-2-6-9-8-12-5Z" fill="#008E85" opacity=".86" />
          <path d="M13 72h43l18-13-7-10-24 11H24L13 72Z" fill="#F5C242" />
          <path d="M54 8c12 4 18 13 17 26-4-9-10-15-21-19l4-7Z" fill="#20B9C8" />
          <path d="M58 13c8 5 12 12 12 21-4-7-9-12-16-15l4-6Z" fill="#F5C242" />
          <path d="M63 31c7 0 12 3 15 9-7-2-13-1-19 3l4-12Z" fill="#F5C242" />
        </svg>
        {!compact && (
          <div className="leading-none">
            <p className="font-display text-2xl font-black uppercase tracking-wide text-brand-teal">Sports</p>
            <div className="my-1 h-px bg-slate-500" />
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.55em] text-slate-600">Academy</p>
          </div>
        )}
      </div>
      {light && !compact && <span className="sr-only">A Square Sports Academy</span>}
    </div>
  );
}

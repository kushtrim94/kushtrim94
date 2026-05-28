export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-[10px] uppercase tracking-[0.06em] text-[var(--muted)]">
        © {year} Kushtrim Marke
      </p>
      <p className="text-[10px] uppercase tracking-[0.06em] text-[var(--muted)]">
        Next.js · TypeScript · React · Vercel
      </p>
    </footer>
  );
}

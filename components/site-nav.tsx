"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-8 border-b border-[var(--line)]">
      <Link
        href="/"
        className="font-display text-[1.25rem] font-light text-[var(--ink)]"
      >
        Kushtrim Marke
      </Link>
      <div className="hidden sm:flex items-center gap-6">
        {links.map((link) => {
          const isProjectsLink = link.href === "/projects";
          const isActive = isProjectsLink
            ? pathname === "/projects"
            : pathname === "/" && link.href.startsWith("/#");

          return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[10px] tracking-[0.1em] uppercase transition-colors ${
              isActive
                ? "text-[var(--ink)]"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            {link.label}
          </Link>
          );
        })}
      </div>
    </nav>
  );
}

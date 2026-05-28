"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TbBuildingEstate,
  TbSchool,
  TbLayoutDashboard,
  TbShoppingBag,
  TbCalendarEvent,
  TbChartBar,
} from "react-icons/tb";
import { sendEmail } from "@/actions/sendEmail";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import CalendlyModal from "@/components/calendly-modal";

type FormStatus = { status: "idle" | "success" | "error"; message: string };

const industries = [
  {
    name: "Real Estate",
    description:
      "Multi-tenant platforms, property listing tools, MLS integrations, lead capture funnels, and agent dashboards with role-based access.",
    icon: TbBuildingEstate,
  },
  {
    name: "EdTech",
    description:
      "Course management systems, student progress tracking, accredited curriculum platforms, and instructor-facing admin tools.",
    icon: TbSchool,
  },
  {
    name: "SaaS & B2B",
    description:
      "Complex dashboards, subscription flows, multi-step onboarding, data visualisation, and API-heavy internal tooling.",
    icon: TbLayoutDashboard,
  },
  {
    name: "E-commerce",
    description:
      "Headless storefronts, product catalogue UIs, checkout optimisation, cart state management, and conversion-focused landing pages.",
    icon: TbShoppingBag,
  },
  {
    name: "Events & ICT",
    description:
      "Conference discovery platforms, event filtering and search, registration flows, and real-time data synchronisation for live events.",
    icon: TbCalendarEvent,
  },
  {
    name: "Data & Analytics",
    description:
      "Analytics dashboards, reporting interfaces, GA4 custom events, Tag Manager setups, and structured data pipelines for SEO.",
    icon: TbChartBar,
  },
] as const;

const experience = [
  {
    date: "Aug 2024 - Present",
    role: "Senior Frontend Developer",
    company: "Key Innovative Solutions · Niche Solutions (US Remote)",
    bullets: [
      "Owned frontend architecture across 20+ Next.js products and defined a shared platform baseline, choosing reusable modules over one-off implementations to avoid fragmented codebases that slow teams at scale.",
      "Led design system standardisation with TypeScript, Shadcn UI, Radix UI, and Tailwind, establishing strict component contracts to reduce UI drift and accelerate multi-team delivery across product lines.",
      "Defined tenant isolation strategy with Supabase/PostgreSQL Row-Level Security, choosing database-level enforcement over app-only checks to avoid privilege leakage and protect enterprise customer trust.",
      "Drove authentication architecture with NextAuth.js, custom OAuth, JWT sessions, and Middleware, choosing centralized route guards over duplicated local checks to avoid inconsistent access behavior in production.",
      "Owned server-side workflow architecture with Server Actions, API Routes, Zod validation, and Resend/Calendar integrations, choosing contract-first validation to prevent invalid payloads from reaching business-critical systems.",
      "Led data access optimisation with Prisma and PostgreSQL, choosing explicit relational query patterns over ad-hoc fetching to eliminate N+1 bottlenecks and improve load times on high-traffic dashboards.",
      "Established performance as a release gate, choosing React Server Components, Suspense, dynamic imports, and asset optimisation to avoid Core Web Vitals regressions that reduce conversion and retention.",
      "Defined technical SEO strategy using JSON-LD, canonicalization, hreflang, Open Graph, and sitemap automation, choosing structured metadata over manual page-by-page tuning to scale organic visibility efficiently.",
      "Drove analytics instrumentation with GTM and GA4 event taxonomy, choosing event governance over unstructured tracking to enable reliable funnel analysis and faster product decisions.",
      "Led sprint execution as a senior IC, defining technical plans, reviewing architecture-critical PRs, and mentoring engineers to improve delivery predictability and raise implementation quality across squads.",
    ],
  },
  {
    date: "2023 - Present",
    role: "Programming Instructor",
    company: "Digital School Macedonia",
    bullets: [
      "Owned accredited web development curriculum strategy, defining progressive learning paths to increase completion rates and readiness for production engineering work.",
      "Led project-based program design, choosing real deployment workflows and Git collaboration over theory-heavy exercises to reduce the gap between classroom output and industry expectations.",
      "Drove mentorship and review standards, establishing architecture-first feedback loops to help students ship maintainable projects instead of fragile demo-only code.",
    ],
  },
  {
    date: "2023 - 2024",
    role: "React Developer",
    company: "GoConf",
    bullets: [
      "Led component architecture refactors for the conference discovery experience, choosing memoized rendering boundaries over brute-force rerenders to avoid performance decay as dataset size grew.",
      "Owned real-time listing synchronization with SWR and optimistic updates, choosing stale-while-revalidate patterns over blocking refreshes to improve perceived speed during live event windows.",
      "Drove filtering UX redesign with design partners, choosing intent-led interaction flows over form-heavy filters to reduce time-to-discovery and increase session depth.",
    ],
  },
  {
    date: "2021 - 2024",
    role: "Frontend Developer",
    company: "Rottera Software Solution",
    bullets: [
      "Owned end-to-end frontend delivery across multiple client verticals, choosing reusable responsive foundations over custom one-off layouts to reduce implementation risk and speed launch timelines.",
      "Led cross-stack integration decisions in lean teams, choosing API-first contracts between React and CMS/backend systems to avoid brittle coupling and lower maintenance overhead post-launch.",
      "Established mobile-first quality baselines with cross-browser test criteria, choosing compatibility-first implementation patterns to prevent regressions that impact acquisition and retention on legacy devices.",
    ],
  },
] as const;

const skillGroups = [
  {
    name: "Frontend core",
    skills: [
      "React 18",
      "Next.js 14 / App Router",
      "TypeScript",
      "JavaScript (ES2022+)",
      "React Server Components",
      "Server Actions",
      "React Hook Form",
      "Zod Validation",
      "SWR",
      "React Query",
      "Zustand",
      "Context API",
      "WebSockets",
      "Web Components",
    ],
    core: [
      "React 18",
      "Next.js 14 / App Router",
      "TypeScript",
      "React Server Components",
      "Server Actions",
    ],
  },
  {
    name: "Styling & UI systems",
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Radix UI",
      "Framer Motion",
      "Material UI",
      "Headless UI",
      "Chakra UI",
      "Styled Components",
      "CSS Modules",
      "Bootstrap",
      "Swiper.js",
    ],
    core: ["Tailwind CSS", "Shadcn UI", "Radix UI"],
  },
  {
    name: "Backend & database",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Prisma ORM",
      "Next.js API Routes",
      "NextAuth.js / Auth.js",
      "Firebase",
      "Firestore",
      "MySQL",
      "GraphQL",
      "REST APIs",
      "Resend API",
      "Google Calendar API",
      "Webhook integrations",
      "JWT / OAuth 2.0",
      "Middleware (Next.js)",
    ],
    core: [
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Prisma ORM",
      "Next.js API Routes",
      "NextAuth.js / Auth.js",
    ],
  },
  {
    name: "Performance & SEO",
    skills: [
      "Core Web Vitals",
      "Lighthouse optimisation",
      "Technical SEO",
      "JSON-LD / Structured Data",
      "Google Tag Manager",
      "Google Analytics 4",
      "next/image optimisation",
      "Font subsetting",
      "Code splitting",
      "Lazy loading",
      "Open Graph / Meta",
      "next-intl (i18n)",
      "Sitemap generation",
      "Google Ads",
    ],
    core: [
      "Core Web Vitals",
      "Lighthouse optimisation",
      "Technical SEO",
      "JSON-LD / Structured Data",
      "Google Tag Manager",
      "Google Analytics 4",
    ],
  },
  {
    name: "Tooling & DevOps",
    skills: [
      "Git",
      "GitHub / GitLab / Bitbucket",
      "Vercel",
      "CI/CD pipelines",
      "Vercel Analytics",
      "ESLint / Prettier",
      "Husky / lint-staged",
      "npm / yarn / pnpm",
    ],
    core: ["Git", "GitHub / GitLab / Bitbucket", "Vercel"],
  },
  {
    name: "CMS & workflow",
    skills: [
      "WordPress",
      "Headless CMS patterns",
      "Agile / Scrum",
      "PR reviews",
      "Technical documentation",
      "Figma handoff",
      "Accessibility (WCAG)",
      "Cross-browser testing",
    ],
    core: ["WordPress"],
  },
] as const;

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const proofRef = useRef(null);
  const industriesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const proofInView = useInView(proofRef, { once: true, margin: "-80px" });
  const industriesInView = useInView(industriesRef, {
    once: true,
    margin: "-80px",
  });
  const experienceInView = useInView(experienceRef, {
    once: true,
    margin: "-80px",
  });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  return (
    <main className="bg-paper min-h-screen px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SiteNav />

        <section className="py-14 sm:py-20">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-6">
            Senior Frontend Engineer · Remote-first · Open to: Senior IC / Tech
            Lead roles
          </p>
          <motion.h1
            className="font-display text-[2rem] sm:text-[2.7rem] leading-[1.15] tracking-[-0.03em] font-light text-[var(--ink)] mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            <motion.span
              className="block text-[var(--ink)]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
            >
              Engineering interfaces that
            </motion.span>
            <motion.span
              className="block text-[var(--ink)]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
            >
              <span className="italic text-[var(--accent)] font-display">
                scale,
              </span>{" "}
              perform, and convert.
            </motion.span>
          </motion.h1>

          <p className="max-w-[460px] text-[12px] leading-[1.9] text-[var(--muted)] border-l-2 border-[var(--gold)] pl-4">
            5+ years building production-grade web applications across real
            estate, edtech, SaaS, and e-commerce. I own the full frontend
            lifecycle — system architecture, component design, performance
            engineering, technical SEO, and cross-functional delivery. I write
            code that ships on time, holds up under scale, and moves business
            metrics.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setIsCalendlyOpen(true)}
              className="inline-flex items-center px-4 py-2 text-[11px] uppercase tracking-[0.08em] bg-[var(--ink)] text-[var(--paper)] border border-[var(--ink)] hover:opacity-90 transition-opacity"
            >
              Let's talk →
            </button>
            <a
              href="https://www.linkedin.com/in/kushtrim-marke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[var(--muted)] border-b border-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/kushtrim94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[var(--muted)] border-b border-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        <section className="pb-6 sm:pb-10">
          <h2 className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-4">
            How I work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Performance is a feature. I define Core Web Vitals and Lighthouse outcomes up front so delivery quality is measurable before release.",
              "I write for the next engineer. I establish clear abstractions, stable contracts, and decision notes so systems stay maintainable as teams grow.",
              "I own the frontend end-to-end. I lead architecture through post-launch monitoring to keep product reliability and velocity aligned.",
              "I operate at the product-engineering intersection. I define the problem with stakeholders first so implementation effort targets business impact, not just output.",
            ].map((principle) => (
              <p
                key={principle}
                className="font-body text-[12px] leading-[1.9] italic text-[var(--muted)]"
              >
                {principle}
              </p>
            ))}
          </div>
        </section>

        <section
          ref={proofRef}
          className="grid grid-cols-1 sm:grid-cols-3 border-y border-[var(--line)]"
        >
          {[
            ["5+ yrs", "Production frontend engineering"],
            ["20+", "Scalable apps shipped"],
            ["6+", "Industries served"],
          ].map(([value, label], index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 14 }}
              animate={
                proofInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
              className="py-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-[var(--line)] text-center"
            >
              <p className="font-display text-[1.55rem] font-light text-[var(--ink)]">
                {value}
              </p>
              <p className="text-[11px] text-[var(--muted)] uppercase tracking-[0.08em]">
                {label}
              </p>
            </motion.div>
          ))}
        </section>

        <section id="industries" className="py-16 sm:py-20">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-4">
            01 — Industries
          </p>
          <h2 className="font-display text-[2rem] font-light text-[var(--ink)] mb-8">
            Industries I Build For
          </h2>
          <div
            ref={industriesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {industries.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                animate={
                  industriesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 14 }
                }
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="border border-[var(--line)] p-5"
              >
                <item.icon className="w-5 h-5 text-[var(--accent)] mb-3" />
                <h3 className="font-display text-[1.1rem] font-light text-[var(--ink)] mb-2">
                  {item.name}
                </h3>
                <p className="text-[11px] leading-[1.8] text-[var(--muted)]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-4 sm:py-8">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-4">
            02 — Experience
          </p>
          <h2 className="font-display text-[2rem] font-light text-[var(--ink)] mb-8">
            Production Experience
          </h2>
          <div ref={experienceRef} className="space-y-10">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.date}`}
                initial={{ opacity: 0, x: -16 }}
                animate={
                  experienceInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -16 }
                }
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-4 sm:gap-8 border-t border-[var(--line)] pt-6"
              >
                <p className="text-[11px] text-[var(--muted)] uppercase tracking-[0.06em]">
                  {item.date}
                </p>
                <div>
                  <p className="text-[12px] text-[var(--ink)] mb-1">{item.role}</p>
                  <p className="font-display italic text-[1.05rem] text-[var(--accent)] mb-4">
                    {item.company}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[11px] leading-[1.85] text-[var(--muted)]"
                      >
                        — {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16 sm:py-20">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-4">
            03 — Technical Skills
          </p>
          <h2 className="font-display text-[2rem] font-light text-[var(--ink)] mb-8">
            Tools and Systems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.name} className="border border-[var(--line)] p-5">
                <h3 className="font-display text-[1.05rem] font-light text-[var(--ink)] mb-4">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isCore = (group.core as readonly string[]).includes(
                      skill
                    );
                    return (
                      <span
                        key={skill}
                        className={`text-[10px] uppercase tracking-[0.06em] px-2.5 py-1 border ${
                          isCore
                            ? "border-[var(--accent)] text-[var(--accent)]"
                            : "border-[var(--muted)] text-[var(--muted)]"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          ref={contactRef}
          initial={{ opacity: 0, y: 16 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="py-16 sm:py-20"
        >
          <h2 className="font-display text-[1.65rem] sm:text-[2rem] font-light text-[var(--ink)] mb-8">
            Let's build something{" "}
            <span className="italic text-[var(--accent)]">worth shipping.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[var(--line)] p-[1px] space-y-[1px]">
              <div className="bg-[var(--paper)] p-4">
                <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                  Email
                </p>
                <a
                  href="mailto:kushtrimmarke12@gmail.com"
                  className="text-[12px] text-[var(--ink)]"
                >
                  kushtrimmarke12@gmail.com
                </a>
              </div>
              <div className="bg-[var(--paper)] p-4">
                <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/kushtrim-marke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[var(--ink)]"
                >
                  kushtrim-marke ↗
                </a>
              </div>
              <div className="bg-[var(--paper)] p-4">
                <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                  GitHub
                </p>
                <a
                  href="https://github.com/kushtrim94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[var(--ink)]"
                >
                  kushtrim94 ↗
                </a>
              </div>
              <div className="bg-[var(--paper)] p-4">
                <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                  Location
                </p>
                <p className="text-[12px] text-[var(--ink)]">
                  Debar, North Macedonia / Available remotely · EU timezone
                </p>
              </div>
            </div>

            <form
              action={async (formData) => {
                setIsSubmitting(true);
                const { data, error } = await sendEmail(formData);
                if (error) {
                  setFormStatus({ status: "error", message: error });
                } else if (data) {
                  setFormStatus({
                    status: "success",
                    message: "Message sent — I'll be in touch shortly.",
                  });
                }
                setIsSubmitting(false);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  maxLength={120}
                  placeholder="Your name"
                  className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
                />
                <input
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="your@email.com"
                  className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
                />
              </div>
              <input
                name="subject"
                maxLength={240}
                placeholder="Project, role, or collaboration"
                className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
              />
              <textarea
                name="message"
                required
                maxLength={5000}
                placeholder="Tell me about the opportunity or project..."
                className="w-full min-h-[170px] border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none resize-y"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 text-[11px] uppercase tracking-[0.08em] bg-[var(--ink)] text-[var(--paper)] border border-[var(--ink)] disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message →"}
              </button>
              {formStatus.status === "success" && (
                <p className="text-[11px] text-[var(--success)]">
                  {formStatus.message}
                </p>
              )}
              {formStatus.status === "error" && (
                <p className="text-[11px] text-[#a43a2e]">{formStatus.message}</p>
              )}
            </form>
          </div>
        </motion.section>

        <SiteFooter />
      </div>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        skipToCalendly
      />
    </main>
  );
}

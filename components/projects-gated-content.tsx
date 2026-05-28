"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Script from "next/script";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { sendProjectInquiry } from "@/actions/sendProjectInquiry";
import dbarberImg from "@/public/dbarber.png";
import nicheMastermindImg from "@/public/niche-mastermind.png";
import nicheBotWidgetImg from "@/public/niche-bot.png";
import premiumCashBuyersImg from "@/public/pcb.png";
import nicheDatabaseAdminImg from "@/public/niche-admin.png";
import goconfImg from "@/public/goconfImg.png";
import goconfadminImg from "@/public/goconfadminImg.png";
import roteraImg from "@/public/roteraImg.png";

type ProjectCard = {
  title: string;
  industry: string;
  stack: string[];
  description: string;
  projectUrl: string;
  imageUrl: StaticImageData;
};

type LeadStep = 1 | 2;

type LeadFormStatus = {
  status: "idle" | "error" | "success";
  message: string;
};

const projects: ProjectCard[] = [
  {
    title: "D Barber Shop",
    industry: "Services / Appointments",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Google Calendar API",
      "Resend API",
      "Framer Motion",
      "Row Level Security",
      "Next-Intl",
    ],
    projectUrl: "https://dbarber.it",
    imageUrl: dbarberImg,
    description:
      "A full-stack appointment management platform for barbershop businesses — handling bookings, staff scheduling, and client management in one system. Owned the entire product from database schema design to production deployment on Vercel. The core challenge was building a conflict-free real-time scheduling engine using Supabase subscriptions and Row-Level Security to isolate each business's data.",
  },
  {
    title: "Niche Mastermind",
    industry: "Real Estate + EdTech",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Swiper.js",
      "Headless UI",
    ],
    projectUrl: "https://www.getnichenow.com/",
    imageUrl: nicheMastermindImg,
    description:
      "A real estate coaching platform that connects investors through events, onboarding flows, and gated content. Built dynamic landing pages and multi-step onboarding experiences optimised for conversion. The challenge was engineering performant page variants for A/B testing without sacrificing Core Web Vitals scores.",
  },
  {
    title: "Niche Bot Widget",
    industry: "SaaS & Support Automation",
    stack: ["React", "TypeScript", "Web Components", "WebSockets", "Tailwind"],
    projectUrl: "https://niche-bot.vercel.app/",
    imageUrl: nicheBotWidgetImg,
    description:
      "An embeddable AI-powered chat widget that turns any website into a live customer support channel. Architected as a framework-agnostic Web Component so it can be dropped into any stack with a single script tag. The hardest part was managing WebSocket state across component lifecycles without leaking connections or causing duplicate sessions.",
  },
  {
    title: "Premium Cash Buyers",
    industry: "Real Estate",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "SEO/Structured Data",
      "Responsive Design",
    ],
    projectUrl: "https://premiumcashbuyers.com/",
    imageUrl: premiumCashBuyersImg,
    description:
      "A real estate lead generation platform that converts homeowners into cash sale leads through optimised landing experiences. Owned frontend architecture and full technical SEO implementation — structured data, Open Graph, and Lighthouse performance tuning. Drove measurable improvements in organic visibility through JSON-LD schema and semantic HTML patterns.",
  },
  {
    title: "Niche Database Admin",
    industry: "Data & Analytics",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "SWR",
      "React Hook Form",
      "Zod",
      "Radix UI",
    ],
    projectUrl: "https://admin.niche-db.com/",
    imageUrl: nicheDatabaseAdminImg,
    description:
      "An internal admin dashboard for managing large-scale web scraping operations that process public notices and legal documents. Built the full frontend independently — data tables, filtering, bulk actions, and role-based access control using NextAuth.js and middleware-level route protection. The challenge was rendering and paginating tens of thousands of records without degrading UI responsiveness.",
  },
  {
    title: "GoConf",
    industry: "Events & ICT",
    stack: ["React", "React Router", "Chakra UI"],
    projectUrl: "https://goconf.io/",
    imageUrl: goconfImg,
    description:
      "The premier ICT conference discovery platform for the Balkans region. Refined the core search and filtering UI, optimised component rendering, and improved the overall event discovery experience. Eliminated unnecessary re-renders through memoisation and restructured state to reduce prop-drilling across the component tree.",
  },
  {
    title: "GoConf Admin",
    industry: "Events & ICT",
    stack: ["React", "Chakra UI"],
    projectUrl: "https://admin.goconf.io",
    imageUrl: goconfadminImg,
    description:
      "The internal admin panel for GoConf — built to give organisers full control over event listings, speaker management, and attendee data. Focused on navigation efficiency and table-heavy UI patterns optimised for power users who spend full days in the dashboard.",
  },
  {
    title: "Rottera",
    industry: "Multi-domain Software",
    stack: ["React", "TypeScript", "Next.js", "Tailwind"],
    projectUrl: "https://rottera.io",
    imageUrl: roteraImg,
    description:
      "Frontend development for Rottera Software — a multi-domain software company covering web, mobile, and backend. Specialised in UI development within a cross-functional team working across the full product stack.",
  },
];

export default function ProjectsGatedContent() {
  const [activeProject, setActiveProject] = useState<ProjectCard | null>(null);
  const [step, setStep] = useState<LeadStep>(1);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isSavingLead, setIsSavingLead] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [buildingInput, setBuildingInput] = useState("");
  const [formStatus, setFormStatus] = useState<LeadFormStatus>({
    status: "idle",
    message: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const isOpen = Boolean(activeProject);

  const calendlyUrl = useMemo(() => {
    const params = new URLSearchParams({
      name: leadName,
      email: leadEmail,
    });
    return `https://calendly.com/kushtrimmarke12?${params.toString()}`;
  }, [leadName, leadEmail]);

  const closeModal = () => {
    setActiveProject(null);
    setStep(1);
    setLeadName("");
    setLeadEmail("");
    setFormStatus({ status: "idle", message: "" });
    setIsSavingLead(false);
    setNameInput("");
    setEmailInput("");
    setBuildingInput("");
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<
        HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLAnchorElement
      >(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const firstFocusable = modalRef.current.querySelector<
      HTMLInputElement | HTMLButtonElement
    >("input, button");
    firstFocusable?.focus();
  }, [isOpen, step]);

  useEffect(() => {
    if (step !== 2) return;
    const calendly = (window as Window & {
      Calendly?: { initInlineWidgets: () => void };
    }).Calendly;
    calendly?.initInlineWidgets();
  }, [step, calendlyUrl]);

  return (
    <main className="bg-paper min-h-screen px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SiteNav />

        <section className="py-16 sm:py-20">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--gold)] mb-4">
            Selected work
          </p>
          <h1 className="font-display text-[2rem] sm:text-[2.2rem] font-light leading-[1.2] tracking-[-0.03em] text-[var(--ink)] mb-3">
            Projects I've owned,
            <br />
            end to end.
          </h1>
          <p className="text-[12px] leading-[1.9] text-[var(--muted)] max-w-[480px]">
            Each project below represents a product I helped architect, build,
            and ship to production. Full case studies are available on a call.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-[var(--line)] p-5 flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--gold)] mb-3">
                  {project.industry}
                </p>
                <h2 className="font-display text-[1rem] font-light text-[var(--ink)] mb-2">
                  {project.title}
                </h2>
                <p className="text-[11px] leading-[1.7] text-[var(--muted)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.06em] px-2.5 py-1 border border-[var(--muted)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-[10px] uppercase tracking-[0.08em] border border-[var(--muted)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                  >
                    View live ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(project);
                      setStep(1);
                    }}
                    className="inline-flex items-center px-4 py-2 text-[11px] uppercase tracking-[0.08em] bg-[var(--ink)] text-[var(--paper)] border border-[var(--ink)] hover:opacity-90 transition-opacity"
                  >
                    See case study →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>

      <AnimatePresence>
        {isOpen && activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (step !== 1) return;
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-[520px] bg-[var(--paper)] border border-[var(--line)]"
              style={{ borderRadius: "var(--border-radius-lg, 1rem)" }}
              role="dialog"
              aria-modal="true"
              aria-label="Project case study access"
            >
              <div className="flex items-start justify-between gap-4 p-5 border-b border-[var(--line)]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--gold)] mb-2">
                    {activeProject.title}
                  </p>
                  <h3 className="font-display text-[1.4rem] font-light text-[var(--ink)]">
                    {step === 1
                      ? `Let's talk about ${activeProject.title}`
                      : "Pick a time that works"}
                  </h3>
                  <p className="text-[12px] text-[var(--muted)] mt-2 leading-[1.7]">
                    {step === 1
                      ? "Leave your details and I'll walk you through the full case study — architecture decisions, challenges, and outcomes — on a short call."
                      : "30 min · I'll walk you through the full case study and answer any questions."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-[var(--muted)] text-[18px] leading-none hover:text-[var(--ink)]"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {step === 1 ? (
                <form
                  className="p-5 space-y-4"
                  onSubmit={async (event) => {
                    event.preventDefault();

                    if (
                      !nameInput.trim() ||
                      !emailInput.trim() ||
                      !buildingInput.trim()
                    ) {
                      setFormStatus({
                        status: "error",
                        message: "Please complete all fields before continuing.",
                      });
                      return;
                    }

                    setIsSavingLead(true);
                    setFormStatus({ status: "idle", message: "" });
                    const result = await sendProjectInquiry({
                      projectTitle: activeProject.title,
                      name: nameInput.trim(),
                      email: emailInput.trim(),
                      whatBuilding: buildingInput.trim(),
                    });
                    setIsSavingLead(false);

                    if (!result.ok) {
                      setFormStatus({ status: "error", message: result.error });
                      return;
                    }

                    setLeadName(nameInput.trim());
                    setLeadEmail(emailInput.trim());
                    setFormStatus({ status: "success", message: "" });
                    setStep(2);
                  }}
                >
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      required
                      placeholder="Your name"
                      maxLength={120}
                      value={nameInput}
                      onChange={(event) => setNameInput(event.target.value)}
                      className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com"
                      maxLength={320}
                      value={emailInput}
                      onChange={(event) => setEmailInput(event.target.value)}
                      className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-building"
                      className="text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-2"
                    >
                      What are you building?
                    </label>
                    <input
                      id="lead-building"
                      name="whatBuilding"
                      required
                      placeholder="What are you building?"
                      maxLength={500}
                      value={buildingInput}
                      onChange={(event) => setBuildingInput(event.target.value)}
                      className="w-full border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-[12px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSavingLead}
                    className="inline-flex items-center px-4 py-2 text-[11px] uppercase tracking-[0.08em] bg-[var(--ink)] text-[var(--paper)] border border-[var(--ink)] disabled:opacity-60"
                  >
                    {isSavingLead ? "Saving..." : "Continue to booking →"}
                  </button>
                  {formStatus.status === "error" && (
                    <p className="text-[11px] text-[#a43a2e]">{formStatus.message}</p>
                  )}
                </form>
              ) : (
                <div className="p-5">
                  <div
                    className="calendly-inline-widget"
                    data-url={calendlyUrl}
                    style={{ minWidth: "320px", height: "630px" }}
                  />
                  <Script src="https://assets.calendly.com/assets/external/widget.js" />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

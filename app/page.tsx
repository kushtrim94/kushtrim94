import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Projects from "@/components/projects"; // Moved to protected subpage
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

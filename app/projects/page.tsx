import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-28 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You for Scheduling!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm looking forward to our conversation. In the meantime, here's a
          detailed look at my project portfolio. Feel free to explore and
          prepare any questions you'd like to discuss during our meeting.
        </p>
      </div>
      <Projects />
    </main>
  );
}

export const metadata = {
  title: "Projects - Kushtrim Marke",
  description:
    "Detailed portfolio of projects by Kushtrim Marke - Frontend Developer",
};

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Black section */}
        <About />
        {/* White section */}
        <Education />
        {/* Black section */}
        <Experience />
        {/* White section */}
        <Projects />
        {/* Black section */}
        <Contact />
      </main>
    </>
  );
}

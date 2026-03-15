
import About from "@/sections/About";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import GithubActivity from "@/sections/GithubActivity";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GithubActivity />
      <Blog />
      <Contact />
    </main>
  );
}



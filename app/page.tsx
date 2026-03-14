import About from "@/sections/About";
import Achievements from "@/sections/Achievements";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
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
      <Achievements />
      <GithubActivity />
      <Blog />
      <Contact />
    </main>
  );
}


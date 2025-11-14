import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <TodoList />
      <Contact />
      
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Carolene Prem Leela. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;

import "./Homepage.scss";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import CaseStudies from "../../components/CaseStudies/CaseStudies";

export default function Homepage() {
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
        <Hero />
      </header>
      <main>
        <CaseStudies />

      </main>
      <footer>
        
      </footer>
    </>
  );
}

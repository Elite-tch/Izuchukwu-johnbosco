import NavBar from "./components/Header";
import HeroPage from "./components/HeroPage";
import ServicesCards from "./components/ServicesCards";
import About from "./components/About";
import TechStack from "./components/skill";
import Experience from "./components/experience";
import WorkPage from "./components/Work";

import ContactForm from "./components/contact"
export default function Home() {
  return (
    <div>
      <div className=" bg-white dark:bg-custom-gradient w-full">
        <NavBar />
        <HeroPage />
        <ServicesCards />
      </div>
      <About />
      <TechStack />
      <Experience />
      <WorkPage />
      <ContactForm />
    </div>
  );
}

import NavBar from "@/views/navbar";
import { useState, useEffect } from "react";
import { SELECTED_PAGE } from "./shared/types";
import Home from "./views/home";
import Benefits from "./views/benefits";
import OurClasses from "./views/our-classes";
import ContactUs from "./views/contact-us";
import Footer from "./views/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SELECTED_PAGE>(
    SELECTED_PAGE.HOME
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SELECTED_PAGE.HOME);
        return;
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;

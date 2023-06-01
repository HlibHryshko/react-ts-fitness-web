import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import Link from "./Link";
type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className="fixed top-0 z-30 w-full py-6">
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="Logo" />

            {/* Right side */}
            <div className={`${flexBetween} w-full`}>
              {/* Inner left side */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* Inner Right side */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

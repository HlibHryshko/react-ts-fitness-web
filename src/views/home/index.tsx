import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SELECTED_PAGE } from "@/shared/types";
import ActionButton from "@/components/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Main Header and Image */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <img alt="evogym" src={HomePageText} />
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now
            </p>
          </div>
          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => {
              setSelectedPage(SELECTED_PAGE.ContactUs);
            }}
            href={`#${SELECTED_PAGE.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
        {/* Image */}
        <div>
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <img alt="redbull-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
          </div>
        </div>
      )}
      <div></div>
    </section>
  );
};

export default Home;

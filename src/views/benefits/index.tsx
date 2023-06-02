import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { IBenefit, SELECTED_PAGE } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "@/components/benefits/Benefit";
import ActionButton from "@/components/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import HeaderText from "@/components/shared/HeaderText";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const benefits: Array<IBenefit> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "fklajflkdasjflk;dasjfl;kajlfk fjdlak flkaj ldja lfkaj lka;f ;alfsda",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "fklajflkdasjflk;dasjfl;kajlfk fjdlak flkaj ldja lfkaj lka;f ;alfsda",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "fklajflkdasjflk;dasjfl;kajlfk fjdlak flkaj ldja lfkaj lka;f ;alfsda",
  },
];

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SELECTED_PAGE.BENEFITS}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SELECTED_PAGE.BENEFITS);
        }}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>more than just gym</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: IBenefit) => (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
              key={benefit.title}
            />
          ))}
        </motion.div>

        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* Description section */}
          <div>
            {/* Title */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HeaderText>
                    millions of happy members getting{" "}
                    <span className="text-primary-500">fit</span>
                  </HeaderText>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                jflkdajf jfdakl al a jfda afjdlak; fa. a I dajfla dafdalk a
                fdalkfjalkd jaslfdsl lkdjaflka;jf laksj lkfaj asj fjfad
                areuryqio mcnvmc jwhe wioqeu fdh fawe fa hfkjdah fkahdfka
                qkjenvcm,n hdfgjhm, fasdfh jkah fdayh dh jd a hfadjh kadsh ka
                fkads fkjash fkasj hfaskj fa
              </p>
              <p className="mb-5">
                jklaj ljfa fa mflkadsj fuqioeqwur q rrqu eoirqu oprqur
                eqwnffmnqm,f qwne,r qw rqw qm,nr kq rhqwjkhr,mqwenrm,qwen eqwhh
                rkqwnr m,ewqnr qwenr m,qnrqpr up uvpau foip uoapis ufoiap ufopa
                uf
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

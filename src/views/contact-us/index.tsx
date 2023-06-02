import { SELECTED_PAGE } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return <section id={SELECTED_PAGE.ContactUs}>ContactUs</section>;
};

export default ContactUs;

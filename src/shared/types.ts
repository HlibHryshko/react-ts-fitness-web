export enum SELECTED_PAGE {
  HOME = "home",
  BENEFITS = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IBenefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

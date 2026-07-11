export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  summary: string;
}

export interface PageCopy {
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface HomeCard {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
}

export interface NumberedCopy {
  number: string;
  title: string;
  body: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface HeroCopy {
  eyebrow: string;
  addressLabel: string;
  appointmentLabel: string;
  imageAlt: string;
  imageCaption: string;
}

export interface ContactCopy {
  eyebrow: string;
  title: string;
  hoursTitle: string;
}

export interface ContactInfo {
  phone: string;
  landline?: string;
  whatsappHref: string;
  email: string;
  address: string;
  city: string;
  hours: string[];
  copy: ContactCopy;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  body: string[];
  principles: NumberedCopy[];
  approach: SectionCopy;
}

export interface SiteContent {
  lang: string;
  title: string;
  description: string;
  businessName: string;
  claim: string;
  intro: string;
  hero: HeroCopy;
  about: AboutContent;
  pages: {
    about: PageCopy;
    services: PageCopy;
    contact: PageCopy;
  };
  homeCards: HomeCard[];
  servicesIntro: SectionCopy;
  nav: NavItem[];
  services: Service[];
  contact: ContactInfo;
  footer: string;
}

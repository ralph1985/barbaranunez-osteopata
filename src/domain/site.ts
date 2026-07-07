export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  summary: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  hours: string[];
}

export interface SiteContent {
  lang: string;
  title: string;
  description: string;
  businessName: string;
  claim: string;
  intro: string;
  nav: NavItem[];
  services: Service[];
  contact: ContactInfo;
}

import site from "./data/site.json";
import { iconNames, type IconName } from "../../domain/icon";
import type { SiteContent } from "../../domain/site";

const validIconNames = new Set<string>(iconNames);

function readIconName(value: string, context: string): IconName {
  if (validIconNames.has(value)) {
    return value as IconName;
  }

  throw new Error(`Icono desconocido "${value}" en ${context}.`);
}

export async function getSiteContent(): Promise<SiteContent> {
  return {
    ...site,
    homeCards: site.homeCards.map((card) => ({
      ...card,
      icon: readIconName(card.icon, `homeCards.${card.title}`),
    })),
    services: site.services.map((service) => ({
      ...service,
      icon: readIconName(service.icon, `services.${service.title}`),
    })),
  };
}

import site from "./data/site.json";
import type { SiteContent } from "../../domain/site";

export async function getSiteContent(): Promise<SiteContent> {
  return site;
}

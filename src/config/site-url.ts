const fallbackSiteUrl = "https://www.barbaranunez-osteopata.es";

function withoutTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  const configuredUrl = import.meta.env.PUBLIC_SITE_URL ?? fallbackSiteUrl;

  return withoutTrailingSlash(configuredUrl);
}

export function getAbsoluteUrl(path: string): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

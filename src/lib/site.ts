export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://attendkh.com").replace(/\/+$/, "");

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export const SOCIAL_IMAGE_PATH = "/opengraph-image";

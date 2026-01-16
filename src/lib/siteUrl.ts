export const getSiteUrl = (): string => {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;
};

export default getSiteUrl;

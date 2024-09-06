/** @type {import('next').NextConfig} */
const nextI18nextConfig = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
  },
};
const nextConfig = {
  nextI18nextConfig,
};

export default nextConfig;

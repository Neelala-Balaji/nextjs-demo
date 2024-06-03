import createNextIntlPlugin from "next-intl/plugin";
import withSvgr from "next-svgr";
import withPlugins from "next-compose-plugins";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins([withSvgr, withNextIntl], nextConfig);

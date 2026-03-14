/** @type {import('next').NextConfig} */
const nextConfig = {
	// Use Next.js static export (Next 14 removed `next export` CLI).
	output: 'export',
	// If deploying under a repo subpath, set these to the repo name.
	// Adjust or remove `basePath`/`assetPrefix` if you serve from domain root.
	basePath: '/Personal-Portfolio',
	assetPrefix: '/Personal-Portfolio/',
}

module.exports = nextConfig

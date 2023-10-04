/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'img.pokemondb.net',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bucket.material-tailwind.com',
          pathname: '**',
        },
      ],
  },
};


module.exports = nextConfig;

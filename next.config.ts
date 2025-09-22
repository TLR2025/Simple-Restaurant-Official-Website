import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
      port: '3000',
    },{
      protocol: 'https',
      hostname: '15modern-landing-page.vercel.app',
    }], 
  },
};

export default withPayload(nextConfig);

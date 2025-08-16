import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // 允许从 localhost 加载图片
  },
};

export default withPayload(nextConfig);

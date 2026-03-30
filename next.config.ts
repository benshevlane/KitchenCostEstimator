import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/us/kitchen-remodel-cost', destination: '/kitchen-remodel-cost', permanent: true },
      { source: '/us/small-kitchen-remodel-cost', destination: '/small-kitchen-remodel-cost', permanent: true },
      { source: '/us/new-york-kitchen-remodel-cost', destination: '/new-york-kitchen-remodel-cost', permanent: true },
      { source: '/us/los-angeles-kitchen-remodel-cost', destination: '/los-angeles-kitchen-remodel-cost', permanent: true },
      { source: '/us/chicago-kitchen-remodel-cost', destination: '/chicago-kitchen-remodel-cost', permanent: true },
      { source: '/us/seattle-kitchen-remodel-cost', destination: '/seattle-kitchen-remodel-cost', permanent: true },
      { source: '/us/dallas-kitchen-remodel-cost', destination: '/dallas-kitchen-remodel-cost', permanent: true },
      { source: '/us/san-francisco-kitchen-remodel-cost', destination: '/san-francisco-kitchen-remodel-cost', permanent: true },
      { source: '/us/denver-kitchen-remodel-cost', destination: '/denver-kitchen-remodel-cost', permanent: true },
      { source: '/us/houston-kitchen-remodel-cost', destination: '/houston-kitchen-remodel-cost', permanent: true },
      { source: '/us/boston-kitchen-remodel-cost', destination: '/boston-kitchen-remodel-cost', permanent: true },
      { source: '/us/phoenix-kitchen-remodel-cost', destination: '/phoenix-kitchen-remodel-cost', permanent: true },
      { source: '/us/miami-kitchen-remodel-cost', destination: '/miami-kitchen-remodel-cost', permanent: true },
      { source: '/uk/kitchen-renovation-cost', destination: '/uk/kitchen-cost', permanent: true },
    ];
  },
};

export default nextConfig;

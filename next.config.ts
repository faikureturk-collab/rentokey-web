import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rentokey.com" }],
        destination: "https://www.rentokey.com/:path*",
        permanent: true,
      },
      { source: "/urun", destination: "/#urun", permanent: true },
      { source: "/ozellikler", destination: "/#ozellikler", permanent: true },
      { source: "/fiyatlandirma", destination: "/#fiyatlandirma", permanent: true },
      { source: "/hakkimizda", destination: "/#hakkimizda", permanent: true },
      { source: "/sss", destination: "/#sss", permanent: true },
      { source: "/iletisim", destination: "/#iletisim", permanent: true },
    ];
  },
};

export default nextConfig;

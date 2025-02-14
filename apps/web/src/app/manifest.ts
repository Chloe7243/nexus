import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "nexus",
    short_name: "nexus",
    description: "Nexus - Hack the feed, Rewrite your reality",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.svg",
        sizes: "192x192",
        type: "image/svg",
      },
      {
        src: "/logo.svg",
        sizes: "512x512",
        type: "image/svg",
      },
    ],
  };
}

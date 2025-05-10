import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
      "@graphql": path.resolve(__dirname, "src/app/graphql"),
      "@lib": path.resolve(__dirname, "src/app/lib"),
      "@styles": path.resolve(__dirname, "src/app/styles"),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@pages": path.resolve(__dirname, "src/app/pages"),
    };
    return config;
  },
};

export default nextConfig;

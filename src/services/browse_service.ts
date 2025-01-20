
import { createProxyMiddleware } from "http-proxy-middleware";
require("dotenv").config();
const browse_service_url = process.env.BROWSE_SERVICE_URL;

export const browse_service_proxy = createProxyMiddleware({
    target: `${browse_service_url}`,
    changeOrigin: true,
    
});

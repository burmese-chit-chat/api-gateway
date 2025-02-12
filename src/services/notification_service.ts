
import { createProxyMiddleware } from "http-proxy-middleware";
require("dotenv").config();
const notification_service_url = process.env.NOTIFICATION_SERVICE_URL;

export const notification_service_proxy = createProxyMiddleware({
    target: `${notification_service_url}`,
    changeOrigin: true,
});
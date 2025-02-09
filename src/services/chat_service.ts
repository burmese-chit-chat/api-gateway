
import { createProxyMiddleware } from "http-proxy-middleware";
require("dotenv").config();
const chat_service_url = process.env.CHAT_SERVICE_URL;

export const chat_service_proxy = createProxyMiddleware({
    target: `${chat_service_url}`,
    changeOrigin: true,
});
import { createProxyMiddleware } from "http-proxy-middleware";
require("dotenv").config();
const auth_service_url = process.env.AUTH_SERVICE_URL;

export const auth_service_proxy = createProxyMiddleware({
    target: `${auth_service_url}/auth`,
    changeOrigin: true,
    
});

export const user_service_proxy = createProxyMiddleware({
    target: `${auth_service_url}/users`,
    changeOrigin: true,
});
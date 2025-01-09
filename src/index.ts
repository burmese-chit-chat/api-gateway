import express, { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
require('dotenv').config();

const PORT : Readonly<number> = 3000;
const app = express();
const auth_service_url = process.env.AUTH_SERVICE_URL;

console.log(auth_service_url);
const auth_service_proxy = createProxyMiddleware({
    target: auth_service_url,
    changeOrigin: true,
});


app.use('/auth', auth_service_proxy);

app.get('/', (req : Request, res : Response) => {
    res.send('Hello world from burmese chit chat api gateway');
});


app.listen(PORT, () => {
    console.log(`Burmese chit chat api gate way is running on port ${PORT}`);
});
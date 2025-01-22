import express, { Request, Response } from "express";
import { auth_service_proxy, user_service_proxy } from "./services/auth_service";
import cors from "cors";
import { browse_service_proxy } from "./services/browse_service";
import cron from "node-cron";
import axios from "axios";
require("dotenv").config();

cron.schedule("*/2 * * * *", async () => { // every 2 minutes
    try {
        const auth_service_url = process.env.AUTH_SERVICE_URL;
        const browse_service_url = process.env.BROWSE_SERVICE_URL;
        const [res_1, res_2] = await Promise.all([axios.get(auth_service_url || ""), axios.get(browse_service_url || "")]);

        console.log("responses from keeping alive");
        console.log(res_1.data);
        console.log(res_2.data);
    } catch (error) {
        console.error("error in keeping alive", error);
    }
});

const PORT: Readonly<number> = 8000;
const app = express();
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
// app.use(express.json());

app.use("/api/v1/auth", auth_service_proxy);
app.use("/api/v1/users", user_service_proxy);
app.use("/api/v1/browse", browse_service_proxy);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from burmese chit chat api gateway");
});

app.listen(PORT, () => {
    console.log(`Burmese chit chat api gate way is running on port ${PORT}`);
});

import express, { Request, Response } from "express";
import { auth_service_proxy, user_service_proxy } from "./services/auth_service";
import cors from "cors";
import { browse_service_proxy } from "./services/browse_service";
import cron from "node-cron";
import keep_alive from "./helpers/keep_alive";
import { chat_service_proxy } from "./services/chat_service";
import { notification_service_proxy } from "./services/notification_service";
require("dotenv").config();

// cron.schedule("*/10 * * * *", keep_alive);

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
app.use("/api/v1/chat", chat_service_proxy);
app.use("/api/v1/notifications", notification_service_proxy);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from burmese chit chat api gateway");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`Burmese chit chat api gate way is running on port ${PORT}`);
});

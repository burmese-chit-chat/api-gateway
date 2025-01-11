import express, { Request, Response } from "express";
import { auth_service_proxy, user_service_proxy } from "./services/auth_service";
require("dotenv").config();

const PORT: Readonly<number> = 3000;
const app = express();


app.use("/api/v1/auth", auth_service_proxy);
app.use("/api/v1/users", user_service_proxy);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from burmese chit chat api gateway");
});

app.listen(PORT, () => {
    console.log(`Burmese chit chat api gate way is running on port ${PORT}`);
});

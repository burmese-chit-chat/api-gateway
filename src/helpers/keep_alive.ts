import axios from "axios";
async function keep_alive () {
    try {
        const auth_service_url = process.env.AUTH_SERVICE_URL;
        const browse_service_url = process.env.BROWSE_SERVICE_URL;
        const chat_service_url = process.env.CHAT_SERVICE_URL;
        const [res_1, res_2, res_3 ] = await Promise.all([ axios.get(auth_service_url || ""), axios.get(browse_service_url || ""), axios.get(chat_service_url || "")]);

        console.log("===============================================");
        console.log("   THIS IS RUNNING EVERY 2 MINUTES             ");
        console.log("   responses from keeping alive                ");
        console.log("  ", res_1.data);
        console.log("  ", res_2.data);
        console.log("  ", res_3.data);
        console.log("===============================================");
    } catch (error) {
        console.log("===============================================");
        console.log("   THIS IS RUNNING EVERY 2 MINUTES             ");
        console.log("   error in keeping alive                      ");
        console.log("   ", (error as Error).message);
        console.log("===============================================");
    }
}

export default keep_alive;
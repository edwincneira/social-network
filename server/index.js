import express from "express";
import configurations from "../config";
import morgan from "morgan"
import routeUsers from "../routes/users.routes"
const app = express();


//middlewars
app.use(morgan("dev"))

//routes
app.use(routeUsers)


app.listen(configurations.PORT, () => {
    console.log("Server on Port,", configurations.PORT);
})

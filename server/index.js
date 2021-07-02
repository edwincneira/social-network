import express from "express";
import configurations from "../config";
import morgan from "morgan"
import routeUsers from "../routes/user/users.route"
const app = express();


//middlewars
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
//routes
app.use(routeUsers)


app.listen(configurations.PORT, () => {
    console.log("Server on Port,", configurations.PORT);
})

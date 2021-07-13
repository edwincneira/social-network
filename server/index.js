import express from "express";
import configurations from "../config";
import morgan from "morgan"
import routeUsers from "../routes/user/users.route"
import routerLogin from "../auth/auth.routes"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middlewars
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
//routes
app.use(routeUsers)
app.use(routerLogin)

app.listen(configurations.PORT, () => {
    console.log("Server on Port,", configurations.PORT);
})

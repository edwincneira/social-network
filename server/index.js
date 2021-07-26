import express from "express";
import config from "../config";
import morgan from "morgan"
import routeUsers from "../routes/user/users.routes"
import routerLogin from "../routes/auth/auth.routes"

const { PORT } = config;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middlewars
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))

//routes
app.use(routeUsers);
app.use(routerLogin);

app.listen(PORT, () => {
    console.log("Server on Port,", PORT);
})
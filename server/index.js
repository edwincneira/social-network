import express from "express";
import config from "../config";
import morgan from "morgan"
import routeUsers from "../routes/user/users.routes"
import routerLogin from "../routes/auth/auth.routes"
import { errors } from "../network/errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import "../Database"

const { PORT, MONGO_URL } = config;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middlewars
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGO_URL })
}))

//routes
app.use(routeUsers);
app.use(routerLogin);
//gestion of errors
app.use(errors)

app.listen(PORT, () => {
    console.log("Server on Port,", PORT);
})
import express from "express";
import config from "./config";
import path from "path"
import morgan from "morgan";
import routeUsers from "./services/user/users.routes";
import routerLogin from "./services/auth/auth.routes";
import routerTest from "./services/routes-test/routes"
import { errors } from "./network/errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import expressHBS from "express-handlebars"
import "./Database";


const { PORT, MONGO_URL } = config;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//settings
app.set("views", path.join(__dirname + "/views/"));
console.log(path.join(app.get("views") + "partials"))
app.engine(".hbs", expressHBS({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views") + "partials"),
    layoutsDir: path.join(app.get("views") + "layouts"),
    extname: ".hbs",
}));
app.set("view engine", ".hbs");

//middlewars
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGO_URL })
}));

//routes
app.use(routeUsers);
// app.use(routerLogin);
// app.use(routerTest)
//gestion of errors
app.use(errors);

app.listen(PORT, () => {
    console.log("Server on Port,", PORT);
})
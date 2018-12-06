import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/userRoutes"
import * as mongoose from "mongoose";
import * as settings from '../config/settings';

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = `${settings.default.database.type}://${settings.default.database.user}:${settings.default.database.password}@${settings.default.database.server}:${settings.default.database.port}/${settings.default.database.name}`;
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private secureAPIMethod(): void {
        // protect routes with token verification
    }

}

export default new App().app;
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import swagger from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

AppDataSource.setOptions({ host: "database_ignite" })
  .initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());

    app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));

    app.use(router);

    return app.listen(3333, () => console.log("it's working!"));
  })
  .catch((error) => console.log("ERRO NESTA PORRA", error));

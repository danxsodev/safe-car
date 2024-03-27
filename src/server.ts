import { dataSource } from "./data-source";
import { router } from "./index.routes";
import express from "express";
import "dotenv/config";

dataSource
  .initialize()
  .then(() => {
    console.log("The data source has initialized the database connection");
  })
  .catch((err: Error) => {
    console.error("Error during database connection initialization: ", err);
  });

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});

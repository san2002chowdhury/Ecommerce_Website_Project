import dotenv from "dotenv";
dotenv.config();
import { Application, EnvConfig } from "./configs";
import { MongoDataSource } from "./datasource";

function bootstrap() {
  MongoDataSource.connect();

  const app = Application.init();
  const { port } = EnvConfig.server;
  app.listen(port || 8080, () => {
    console.info(`server started on --------------------------> ${port}`);
  });

  process.on("SIGINT", () => {
    MongoDataSource.disconnect();
  });
}

bootstrap();

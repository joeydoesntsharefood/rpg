import express from 'express';
import { port, verifyRequiredVariables } from './configs/variables';
import router from './routes';
import { AppDataSource } from './configs/db';

const verified =  verifyRequiredVariables()

if (verified) {
  AppDataSource.initialize()
    .then(() => {
      const app = express();
      const PORT = port;
      
      app.use(express.json());
      
      app.use("/v1", router);

      console.log("Seu banco de dados foi conectado!");
      
      app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}/v1`);
      });
    })
    .catch((e) => {
      console.error("Ocorreu um erro ao conectar com seu banco de dados:", e);
    });
}  

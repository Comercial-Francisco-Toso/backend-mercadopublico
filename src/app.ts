import express from 'express';
import cors from 'cors';
import routerApi from './routes';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();

// Configurar CORS
app.use(cors({ origin: "*" }));

app.use(express.json());

// Configurar las rutas
routerApi(app);

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
})

import express from 'express';
import licitacionesRoutes from './licitacionesRoutes';

const routerApi = (app: express.Application) => {
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/mercadopublico', licitacionesRoutes); // Añadir la ruta de facturas
};

export default routerApi;

// src/controllers/licitacionesController.ts
import { Request, Response } from 'express';
import LicitacionesService from '../services/licitacionesService';

class LicitacionesController {
    async getLicitaciones(req: Request, res: Response) {
        try {
            const { page = '1' } = req.query;
            const take = 500;
            const pageNumber = Number(page);
            const skip = (pageNumber - 1) * take;

            const { data, total } = await LicitacionesService.getLicitaciones(skip, take);

            res.json({
                total,
                page: pageNumber,
                pageSize: take,
                totalPages: Math.ceil(total / take),
                data
            });
        } catch (error) {
            console.error("Error al obtener licitaciones:", error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new LicitacionesController();

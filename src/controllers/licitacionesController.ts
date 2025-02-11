// src/controllers/licitacionesController.ts
import { Request, Response } from 'express';
import LicitacionesService from '../services/licitacionesService';

class LicitacionesController {
    async getLicitaciones(req: Request, res: Response) {
        try {
            // Se obtiene la data directamente ya que el servicio ya retorna response.data
            const data = await LicitacionesService.todoEstadoDiaActual();

            // Se retorna el JSON recibido
            res.json(data);
        } catch (error) {
            console.error("Error al obtener licitaciones:", error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getLicitacionesFecha(req: Request, res: Response) {
        try {

            const date = new Date();

            const fecha = { 'fecha': date.toDateString() };

            // Se obtiene la data directamente ya que el servicio ya retorna response.data
            const data = await LicitacionesService.todoFecha(fecha);

            // Se retorna el JSON recibido
            res.json(data);
        } catch (error) {
            console.error("Error al obtener licitaciones:", error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new LicitacionesController();

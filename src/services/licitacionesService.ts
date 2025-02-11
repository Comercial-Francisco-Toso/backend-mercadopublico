// src/services/licitacionesService.ts
import axios from 'axios';

class LicitacionesService {
  async getLicitaciones(skip: number, take: number) {
    // Calculamos la página en base a skip y take (ya que la API utiliza "pagina")
    const page = Math.floor(skip / take) + 1;

    // Obtenemos la API key desde las variables de entorno
    const API_KEY = process.env.MERCADOPUBLICO_API_KEY;
    if (!API_KEY) {
      throw new Error("MERCADOPUBLICO_API_KEY no está definida en las variables de entorno");
    }

    // Se ha removido el parámetro "estado" ya que la API no lo reconoce
    const url = `https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?apikey=${API_KEY}&pagina=${page}&limite=${take}`;
    
    const response = await axios.get(url);
    const apiData = response.data;

    // Se asume que la respuesta tiene la siguiente estructura:
    // {
    //    "Listado": [ ... licitaciones ... ],
    //    "CantidadTotal": número
    // }
    const licitaciones = apiData.Listado || [];
    const total = apiData.CantidadTotal || 0;

    return { data: licitaciones, total };
  }
}

export default new LicitacionesService();

// src/services/licitacionesService.ts
import axios from 'axios';

class LicitacionesService {
  private baseUrl = 'https://api.mercadopublico.cl';
  // Equivalente a Listar.path en la documentación
  private path = 'servicios/v1/publico';

  /**
   * Imitación del método todoEstadoDiaActual() de la clase Listar.
   * Construye la URL y realiza la consulta para obtener todas las licitaciones del día actual.
   */
  async todoEstadoDiaActual() {

    const API_KEY = process.env.MERCADOPUBLICO_API_KEY;
    if (!API_KEY) {
      throw new Error("MERCADOPUBLICO_API_KEY no está definida en las variables de entorno");
    }

    const formato = 'json';

    // Construcción del path de la misma forma que en la consulta original
    // Original: `${Listar.path}/${this.tipo}.${this.formato}`
    // Aquí asumimos que this.tipo === "licitaciones"
    const fullPath = `${this.path}/licitaciones.${formato}`;

    // Generamos la URL completa agregando el parámetro "ticket"
    const endpoint = new URL(this.baseUrl);
    endpoint.pathname = fullPath;
    endpoint.search = new URLSearchParams({ ticket: API_KEY }).toString();

    try {
      // Realizamos la petición con Axios (timeout de 30 segundos)
      const response = await axios.get(endpoint.href, { timeout: 30000 });
      // Retornamos la data de la respuesta

      return response.data;
    } catch (error: any) {
      console.error('Error al obtener licitaciones:', error.message);
      throw error;
    }
  }

  async todoFecha(fecha: Record<string, string> = {}) {
    // Obtenemos la API key desde las variables de entorno
    const API_KEY = process.env.MERCADOPUBLICO_API_KEY;
    if (!API_KEY) {
      throw new Error("MERCADOPUBLICO_API_KEY no está definida en las variables de entorno");
    }

    const formato = 'json';
    // Construimos el path similar al método original: "servicios/v1/publico/licitaciones.json"
    const fullPath = `${this.path}/licitaciones.${formato}`;

    // Construimos la URL completa agregando los parámetros "ticket" y "fecha"
    const endpoint = new URL(this.baseUrl);
    endpoint.pathname = fullPath;
    endpoint.search = new URLSearchParams({ ticket: API_KEY, ...fecha }).toString();

    console.log('endpoint.href', endpoint.href)

    try {
      // Realizamos la petición con Axios (timeout de 30 segundos)
      const response = await axios.get(endpoint.href, { timeout: 30000 });
      console.log('response.data:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener licitaciones por fecha:', error.message);
      throw error;
    }
  }
}

export default new LicitacionesService();

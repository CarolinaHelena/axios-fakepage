// Importando Axios
import axios from "axios";

// Criando uma const que exporta a base do axios
 export const api = axios.create({
    baseURL:'https://fakestoreapi.com'
})

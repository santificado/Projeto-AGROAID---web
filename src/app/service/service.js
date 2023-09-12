import axios from "axios";

const api = 'http://localhost:8080/'
const api2 = 'https://entrega-challenge-4-sem-production.up.railway.app/'

export async function Login(form) {
    return await axios.post(`${api2}login`, form)
    
} 

export async function Register(form){
    return await axios.post(`${api2}registrar`, form)
}

export async function GetChatResponse(id){
    return await axios.get(`${api}categories?id=${id}`)
}

export async function GetClimaResponse(cidade, apiKey) {
   
      const response = await axios.get(`${api}clima`,  {
         headers: {
          'Authorization': `Bearer ${apiKey}`,

        },
      });
      return response.data;
    } 
  
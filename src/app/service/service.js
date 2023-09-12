import axios from "axios";

const api = 'http://localhost:8080/'
const api2 = 'https://entrega-challenge-4-sem-production.up.railway.app/'

export async function Login(form) {
  try {
    const response = await axios.post(`${api2}login`, form);
    console.log('Resposta do login:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}

export async function Register(form) {
  try {
    const response = await axios.post(`${api2}registrar`, form);
    console.log('Resposta do cadastro:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
}

export async function GetChatResponse(id) {
  try {
    const response = await axios.get(`${api}categories?id=${id}`);
    console.log('Resposta da solicitação de chat:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter resposta do chat:', error);
    throw error;
  }
}

export async function GetClimaResponse(cidade, apiKey) {
  try {
    const response = await axios.get(`${api}clima`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    console.log('Resposta da solicitação de clima:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter resposta do clima:', error);
    throw error;
  }
}

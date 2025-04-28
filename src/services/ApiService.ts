import axios from 'axios';

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  timeout: 10000,
});

export default ApiService;
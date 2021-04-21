import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const tokenStorage = JSON.parse(localStorage.getItem('token'));

  if(tokenStorage && tokenStorage.accessToken){
    const token = 'Bearer ' + tokenStorage.accessToken;
    config.headers.Authorization =  token;
  }

  return config;
});

class ApiService {
  async getComunidad() {
    return await axios.get("/api/Comunidad");
  }
}

export default new ApiService();
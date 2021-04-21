import axios from "axios";

class AuthenticationService {
  async iniciarSesion(username, password) {
    return await axios
      .post("/api/Login", { username, password })
      .then((response) => {
        if (response.data.estado === "successful") {
          localStorage.setItem("token", response.data.mensaje);
        }
        return response.data
      })
      .catch((error) => {
        throw error;
      });
  }

  cerrarSession() {
    localStorage.removeItem("token");
  }

  register = async (
    nombre,
    apellidos,
    fechaNacimiento,
    email,
    perfil,
    numeroCelular
  ) => {
    return axios
      .post("/api/Usuarios", {
        nombre,
        apellidos,
        fechaNacimiento,
        perfil,
        email,
        numeroCelular,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  getToken() {
    return JSON.parse(localStorage.getItem("token"));
  }
}

export default new AuthenticationService();

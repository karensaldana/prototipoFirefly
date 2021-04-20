import axios from "axios";

class AuthenticationService {
  async iniciarSesion(username, password) {
    return await axios
      .post("/api/Login", { username, password })
      .then((response) => {
        if (response.data.estado === "successful") {
          localStorage.setItem("user", response.data.mensaje);
        }
        return response
      })
      .catch((error) => {
        throw error;
      });
  }

  signOut() {
    localStorage.removeItem("user");
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
        console.log(err);
        throw err;
      });
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthenticationService();

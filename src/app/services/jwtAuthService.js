import axios from "axios";
import localStorageService from "./localStorageService";

class JwtAuthService {
  user = {
    userId: "1",
    role: "ADMIN",
    displayName: "Watson Joyce",
    email: "watsonjoyce@gmail.com",
    photoURL: "/assets/images/face-7.jpg",
    age: 25,
    token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
  };

  loginWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 1000);
    }).then((data) => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  login = (login, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/users/login`,
            data: { login: login, password: password },
          })
        );
      }, 1000);
    }).then((response) => {
      this.setSession(response.data.token);
      this.setUser(response.data.user);
      this.setExpireDate(new Date(new Date().getTime() + 1000 * 60 * 60 * 2));
      return response.data;
    });
  };

  autoLogin = (user, token) => {
    this.setSession(token);
    this.setUser(user);
  }

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    }).then((data) => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
    this.removeExpireDate();
  };

  setExpireDate = (date) => {
    localStorageService.setItem("expire_date", date);
  };

  setSession = (token) => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  setUser = (user) => {
    localStorageService.setItem("auth_user", user);
  };
  removeUser = () => {
    localStorage.removeItem("auth_user");
  };
  removeExpireDate = () => {
    localStorage.removeItem("expire_date");
  };
}

export default new JwtAuthService();

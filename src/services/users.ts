import axios from "axios";
axios.defaults.withCredentials = false;

class UserDataService {
  getAll(token: string) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.get("http://127.0.0.1:8000/users/"
    );
  }

  createUser(data: string) {
    return axios.post('http://127.0.0.1:8000/signup/', data, {
      headers: {
        
        "Content-Type" : "application/vnd.api+json"
      },
      withCredentials: false
    })
    
  }

  updateUser(id: any, data: any, token: string) {
    axios.defaults.headers.common["Authorization"] = "Token" + token;
    return axios.put("http://127.0.0.1:8000/users/${id}", data);
  }

  deleteUser(id: any, token: string) {
    axios.defaults.headers.common["Authorization"] = "Token" + token;
    return axios.delete("http://127.0.0.1:8000/users/${id{");
  }

  login(data: any) {
    return axios.post("http://localhost:8000/login/", data);
  }

  signup(data: any) {
    return axios.post("http://127.0.0.1:8000/signup/", data);
  }
}

export default new UserDataService();
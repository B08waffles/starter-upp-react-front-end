import axios from "axios";
axios.defaults.withCredentials = true;


class CompanyDataService {
  getAll(token: string) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.get("http://127.0.0.1:8000/companys/");
  }

  createCompany(data: string, token: string) {
    return axios.post('http://127.0.0.1:8000/companys/', data, {
      headers: {
        "Authorization" : "Token " + token,
        "Content-Type" : "application/vnd.api+json"
      },
      withCredentials: true
    })
    
  }
  // createCompany(data: any, token: string) {
  //   axios.defaults.headers.common["Authorization"] = "Token " + token
  //   return axios.post("http://127.0.0.1:8000/companys/", data)
  // };

  updateCompany(id: any, data: any, token: string) {
    axios.defaults.headers.common["Authorization"] = "Token" + token;
    return axios.put("http://127.0.0.1:8000/companys/${id}", data);
  }

  deleteCompany(id: any, token: string) {
    axios.defaults.headers.common["Authorization"] = "Token" + token;
    return axios.delete("http://127.0.0.1:8000/companys/${id{");
  }
}

export default new CompanyDataService();

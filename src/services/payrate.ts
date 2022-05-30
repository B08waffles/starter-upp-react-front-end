import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';
class PayrateDataService {
    getAll (token: string) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get('/payrates/');
    }
    getAllForCompany (token: string, company:string) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get(`/payrates/?associated_company=${company}`);
    }
}

export default new PayrateDataService();
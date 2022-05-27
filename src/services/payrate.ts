import axios from "axios";

class PayrateDataService {
    getAll (token: string) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get('http://127.0.0.1:8000/payrates/');
    }
    getAllForCompany (token: string, company:string) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get(`http://127.0.0.1:8000/payrates/?associated_company=${company}`);
    }
}

export default new PayrateDataService();
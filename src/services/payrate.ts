import axios from "axios";
axios.defaults.baseURL = 'https://starter-upp-django-back-end.herokuapp.com';
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
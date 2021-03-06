import axios from 'axios';
axios.defaults.baseURL = 'https://starter-upp-django-back-end.herokuapp.com';
axios.defaults.withCredentials = true;

// Here we define our axios/xml/fetch requests that we bring into our components and App.tsx file.
// Since our back-end API requires an auth token, we must attach it to the "Authorization" header like so.

class CompanyDataService {
  getAll(token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get('/companys/');
  }

  createCompany(data: string, token: string) {
    return axios.post('/companys/', data, {
      headers: {
        Authorization: 'Token ' + token,
        'Content-Type': 'application/vnd.api+json',
      },
      withCredentials: true,
    });
  }

  updateCompany(id: any, data: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.put('/companys/${id}', data);
  }

  deleteCompany(id: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.delete('/companys/${id}');
  }
}

export default new CompanyDataService();

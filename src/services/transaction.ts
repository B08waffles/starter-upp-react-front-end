import axios from 'axios';
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://starter-upp-django-back-end.herokuapp.com';
// Here we define our axios/xml/fetch requests that we bring into our components and App.tsx file.
// Since our back-end API requires an auth token, we must attach it to the "Authorization" header like so.

class TransactionDataService {
  getAll(token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get('/transactions/');
  }

  getAllForCompany(token: string, associated_company_id: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get(`/transactions/?associated_company_id=${associated_company_id}`);
  }

  createTransaction(data: any, token: string) {
    return axios.post('/transactions/', data, {
      headers: {
        Authorization: 'Token ' + token,
        'Content-Type': 'application/vnd.api+json',
      },
      withCredentials: true,
    });
  }

  getMyTransactions(token: string, user: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get(`/transactions/?associated_user_id=${user}`);
  }

  getMyTransactionsMI(token: string, user: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get(`/transactions/?associated_user_id=${user}&type_of_contribution=MI`);
  }

  getMyTransactionsHW(token: string, user: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get(`/transactions/?associated_user_id=${user}&type_of_contribution=HW`);
  }

  updateTransaction(id: any, data: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.put('/transactions/${id}', data);
  }

  deleteTransaction(id: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.delete('/transactions/${id{');
  }
}

export default new TransactionDataService();

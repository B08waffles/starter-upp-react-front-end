import axios from 'axios';
axios.defaults.withCredentials = false;

// Here we define our axios/xml/fetch requests that we bring into our components and App.tsx file.
// Since our back-end API requires an auth token, we must attach it to the "Authorization" header like so.

class TransactionDataService {
  getAll(token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get('http://127.0.0.1:8000/transactions/');
  }

  createTransaction(data: any, token: string) {
    return axios.post('http://127.0.0.1:8000/transactions/', data, {
      headers: {
        Authorization: 'Token ' + token,
        'Content-Type': 'application/vnd.api+json',
      },
      withCredentials: true,
    });
  }

  getMyTransactions(token: string, user: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get(`http://127.0.0.1:8000/transactions/?associated_user_id=${user}`);
  }

  updateTransaction(id: any, data: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.put('http://127.0.0.1:8000/transactions/${id}', data);
  }

  deleteTransaction(id: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.delete('http://127.0.0.1:8000/transactions/${id{');
  }
}

export default new TransactionDataService();

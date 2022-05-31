import axios from 'axios';
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://starter-upp-django-back-end.herokuapp.com';
// Here we define our axios/xml/fetch requests that we bring into our components and App.tsx file.
// Since our back-end API requires an auth token, we must attach it to the "Authorization" header like so.



class UserDataService {
  getAll(token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    return axios.get('/users/');
  }

  createUser(data: string) {
    return axios.post('/signup/', data, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      withCredentials: false,
    });
  }

  updateUser(id: any, data: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.put('/users/${id}', data);
  }

  deleteUser(id: any, token: string) {
    axios.defaults.headers.common['Authorization'] = 'Token' + token;
    return axios.delete('/users/${id{');
  }

  login(data: string) {
    return axios.post('/api-token-auth/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });
  }
  // logdont(username: string, password: string) {
  //   return axios.post(`http://localhost:8000/api-taken-auth/username=${username}&password=${password}`)
  // }
 
  signup(data: any) {
    return axios.post('/signup/', data);
  }
}

export default new UserDataService();

import React from 'react';
import './index.scss';
import './App.css';
import LeNavBar from './components/LeNavBar';
import LeFooter from './components/LeFooter';
import UserDataService from '../src/services/users';
import LoginForm from './components/LoginForm';
import {Container} from 'react-bootstrap';
import RegistrationForm from './components/RegistrationForm';
import LeHome from './components/LeHome';
import {Route, Routes} from 'react-router-dom';
import LeSettings from './components/LeSettings';
import AddCompany from './components/AddCompany';
import AddTransaction from './components/AddTransaction';
import MyTransactions from './components/MyTransactions';
import MyCompanies from './components/MyCompanies';
import AllTransactions from './components/AllTransactions';
import AllCompanies from './components/AllCompanies';
import AllUsers from './components/AllUsers';
import LoadingSpinner from './components/LoadingSpinner';
import ChartsTest from './components/ChartsTest';
import EndTimes from './components/EndTimes';
import Helper from './components/Helper';
import PrivacyPolicy from './components/PrivacyPolicy';
import License from './components/License';

// App is the centerpiece of our whole React ecosystem
export default function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [lightMode, setLightMode] = React.useState(false);

  // useEffect here runs everytime a component loads or theme is changed
  // and checks which theme to style with based on whats set in localStorage

  React.useEffect(() => {
    const json = localStorage.getItem('site-light-mode');
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  }, []);
  React.useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    const json = JSON.stringify(lightMode);
    localStorage.setItem('site-light-mode', json);
  }, [lightMode]);

  // Below is where we rope in the UserDataService class which has the login function
  // from which we dictate login functionality from by setting the username and
  // auth token to localStorage to give this Single Page Application "State"

  async function login(user = null) {
    setIsLoading(true);
    UserDataService.login(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', user.username);
        setError('');
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
        setIsLoading(false);
      });
  }

// Below is where we dictate what happens when a user wishes to register a new account
// basicly we post their details and from the server response we set their username and 
// auth token to localStorage, just like what we did in the login function above

  async function signup(user = null) {
    // default user to null
    setIsLoading(true);
    UserDataService.signup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', user.username);
        console.log(response.data);
        setError('');
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        console.log(user);
        setError(e.toString());
        setIsLoading(false);
      });
  }

// Here we return all our components in order to access them by their given 'path'
// all of this is loaded into index.tsx. Loading spinner is here too, activated by the 
// boolean "isLoading". Things to note here are the Routes and Route, these things can render
// but are not always rendering, however, the elements/components outside of the <Routes> will 
// always render, such as <LeNavBar> or <LeFooter>, except for the loading spinner which is only 
// rendered when isLoading = true.

  return (
    <>
    <Container className="app">
      <LeNavBar />
      <Container style={{padding: '2em'}} id="party" className="bg-dark text-white " >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="*" element={<LeHome />} />
            <Route path="/settings" element={<LeSettings />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/allusers" element={<AllUsers token={token} />} />
            <Route path="/alltransactions" element={<AllTransactions token={token} />} />
            <Route path="/register" element={<RegistrationForm signup={signup} />} />
            <Route path="/addcompany" element={<AddCompany />} />
            <Route path="/companyownership" element={<EndTimes /> } />
            <Route path="/addtransaction" element={<AddTransaction />} />
            <Route path="/mytransactions" element={<MyTransactions token={token} />} />
            <Route path="/allcompanies" element={<AllCompanies token={token} />} />
            <Route path="/mycompanies" element={<MyCompanies />} />
            <Route path="/charts" element={<ChartsTest /> } />
            <Route path="/help" element={<Helper/>} />
            <Route path="legislation" element={<PrivacyPolicy /> } /> 
            <Route path="/license" element={<License /> } />
          </Routes>
        )}
        <LeFooter />
      </Container>
      
    </Container>
    
    </>
  );
}

import React from "react";
import './index.scss'
import './App.css';
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeNavBar from "./components/LeNavBar";
import LeFooter from "./components/LeFooter";
import UserDataService from "../src/services/users";
import LoginForm from "./components/LoginForm";
import { Container } from "react-bootstrap";
import RegistrationForm from "./components/RegistrationForm";
import LeHome from "./components/LeHome";
import { Route, Routes } from "react-router-dom";
import LeSettings from "./components/LeSettings";
import AddCompany from "./components/AddCompany";
import AddTransaction from "./components/AddTransaction";
import MyTransactions from "./components/MyTransactions";
import MyCompanies from "./components/MyCompanies";
import AllTransactions from "./components/AllTransactions";
import AllCompanies from "./components/AllCompanies";
import AllUsers from "./components/AllUsers";
import LoadingSpinner from "./components/LoadingSpinner"

export default function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false)
  const [lightMode, setLightMode] = React.useState(false);

  React.useEffect(() => {
  const json = localStorage.getItem("site-light-mode");
  const currentMode = JSON.parse(json);
  if (currentMode) {
    setLightMode(true);
  } else {
    setLightMode(false);
  }
}, []);
  React.useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
      
    } else {
      document.body.classList.remove("light");
      
    }
    const json = JSON.stringify(lightMode);
    localStorage.setItem("site-light-mode", json);
  }, [lightMode]);

  async function login(user = null) {
    setIsLoading(true)
    UserDataService.login(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        //let navigate = useNavigate();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", user.username);
        setError("");
        setIsLoading(false);
        
        //navigate('/home');
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
        setIsLoading(false)
      });
  }

  async function signup(user = null) {
    // default user to null
    setIsLoading(true)
    UserDataService.signup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", user.username);
        console.log(response.data)
        setError("");
        setIsLoading(false)
        
      })
      .catch((e) => {
        console.log(e);
        console.log(user)
        setError(e.toString());
        setIsLoading(false)
      });
  }

  return (
    <div className="app bg-dark text-white">
      
      <LeNavBar />
      <Container style={{ padding: "2em" }} className='bg-dark text-white'>
        {isLoading ? <LoadingSpinner /> :<Routes>
          
          <Route path="*" element={<LeHome />} />
          <Route path="/settings" element={<LeSettings />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/allusers" element={<AllUsers token={token} />} />
          <Route path="/alltransactions" element={<AllTransactions token={token} />} />
          <Route
            path="/register"
            element={<RegistrationForm signup={signup} />}
          />
          <Route path="/addcompany" element={<AddCompany />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
          <Route path="/mytransactions" element={<MyTransactions token={token}/>} />
          <Route
            path="/allcompanies"
            element={<AllCompanies token={token}  />}
          />
          <Route path="/mycompanies" element={<MyCompanies />} />
  </Routes>}
</Container>
      <LeFooter />
    </div>
  );
}

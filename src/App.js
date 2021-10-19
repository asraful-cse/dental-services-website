import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ApplyPage from "./components/ApplyPage/ApplyPage";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Service></Service>
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <PrivetRoute path="/service_detail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>
          <Route path="/apply">
            <ApplyPage></ApplyPage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

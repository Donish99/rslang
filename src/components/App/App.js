import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./../Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import "react-toastify/dist/ReactToastify.css";
import style from "./App.module.scss";

import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicRoute from '../PublicRoute/PublicRoute'

import AboutCommand from '../Slides/AboutCommand/AboutCommand'

// Just an example
import authService from "./../../services/authService";
import { useEffect } from "react";

// const authExample = async () => {
//   const data = await authService.login("admin@admin.com", "AdminAdmin");
//   console.log(data);
// };

const App = () => {
  // useEffect(() => {
  //   authExample();
  // }, []);

  return (
    <div className={`${style.wrapper} bg-light`}>
      <ToastContainer />
      <Header />
      <Router>
        <PublicRoute exact path="/" component={MainPage} />

         {/* {below "AboutCommand" change to necessary component} */}
        <PrivateRoute component={AboutCommand} path="/Games" exact />
        <PrivateRoute component={AboutCommand} path="/Statistic" exact />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

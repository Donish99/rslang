import { HashRouter as Router } from "react-router-dom";
import Header from "./../Header/Header";
// import HeaderWithFormik from "./../Header/HeaderWithFormik";
import { ToastContainer } from "react-toastify";
// import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import GrupSection from '../Electronic-textbook/GrupSection/GrupSection';
import WordList from '../Electronic-textbook/WordList/WordList';
import GamesMain from "./../Games/GamesMain/GamesMain.jsx";
import Game from "../Games/Game/Game";
import "react-toastify/dist/ReactToastify.css";
import style from "./App.module.scss";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import AboutCommand from "../Slides/AboutCommand/AboutCommand";

const App = () => {
  return (
    <div className={`${style.wrapper} bg-light`}>
      <ToastContainer />
      <Header />
      <Router>
        <PrivateRoute exact path="/wordSection" component={GrupSection} />
        <PrivateRoute path="/wordSection/:id" component= {WordList}/>
        <PublicRoute exact path="/" component={MainPage} />

        {/* {below "AboutCommand" change to necessary component} */}
        <PrivateRoute component={GamesMain} path="/games" exact />
        <PrivateRoute component={Game} path="/games/:id" exact />
        <PrivateRoute component={AboutCommand} path="/Statistic" exact />
      </Router>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

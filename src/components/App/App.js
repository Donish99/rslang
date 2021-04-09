import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./../Header/Header";
// import HeaderWithFormik from "./../Header/HeaderWithFormik";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import GamesMain from "./../Games/GamesMain/GamesMain.jsx";
import Game from "../Games/Game/Game";
import "react-toastify/dist/ReactToastify.css";
import style from "./App.module.scss";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import Statistics from "../Statistics/Statistics";

const App = () => {
  return (
    <div className={`${style.wrapper} bg-light`}>
      <ToastContainer />
      <Header />
      <div className={ style.container }>
      <Router>
        <PublicRoute exact path="/" component={MainPage} />

        {/* {below "AboutCommand" change to necessary component} */}
        <PrivateRoute component={GamesMain} path="/games" exact />
        <PrivateRoute component={Game} path="/games/:id" exact />
        <PrivateRoute component={Statistics} path="/statistic" exact />
      </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;

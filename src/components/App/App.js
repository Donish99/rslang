import { HashRouter as Router } from "react-router-dom";
import Header from "./../Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import GrupSection from '../Electronic-textbook/GrupSection/GrupSection';
import WordList from '../Electronic-textbook/WordList/WordList';
import GamesMain from "./../Games/GamesMain/GamesMain.jsx";
import Game from "../Games/Game/Game";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import Statistics from "../Statistics/Statistics";

import style from "./App.module.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className={`${style.wrapper} bg-light`}>
      <ToastContainer />
      
      <div className={ style.container }>
      <Router>
        <Header />
        <PublicRoute exact path="/" component={MainPage} />
        <PrivateRoute exact path="/wordSection" component={GrupSection} />
        <PrivateRoute path="/wordSection/:id" component= {WordList}/>
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

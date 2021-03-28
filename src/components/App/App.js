import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./../Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import GamesMain from "./../Games/GamesMain.jsx";
import Game from "../Games/Game";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="bg-light">
      <ToastContainer />
      <Header />
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/games" component={GamesMain} />
        <Route exact path="/games/:id" component={Game} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

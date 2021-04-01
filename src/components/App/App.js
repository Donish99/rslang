import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./../Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import "react-toastify/dist/ReactToastify.css";
import style from "./App.module.scss";


const App = () => {
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

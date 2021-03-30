import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./../Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./../Footer/Footer";
import MainPage from "./../MainPage/MainPage";
import GrupSection from '../Electronic-textbook/GrupSection/GrupSection';
import Words from '../Electronic-textbook/WordList/WordList';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Just an example
import authService from "./../../services/authService";
import { useEffect } from "react";

const authExample = async () => {
  const data = await authService.login("admin@admin.com", "AdminAdmin");
  // console.log(data);
};

const App = () => {
  useEffect(() => {
    authExample();
  }, []);

  return (
    <div className="bg-light">
      <ToastContainer />
      <Header />
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/wordSection" component={GrupSection} />
        <Route path="/wordSection/:id" render={({ match }) => {
          const { id } = match.params;
          return <Words itemId={id} />
        }} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

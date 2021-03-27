import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import MainPage from './../MainPage/MainPage'
import './App.css';

const App = () => {
  return (
    <div className="bg-light">
      <Header/>   
      <Router>
        <Route exact path='/' component={MainPage} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

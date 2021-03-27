import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './../Header/Header'
import MainPage from './../MainPage/MainPage'
import './App.css';

const App = () => {
  return (
    <div className="bg-light">
      <Header/>   
      <Router>
        <Route exact path='/' component={MainPage} />
      </Router>
    </div>
  );
}

export default App;

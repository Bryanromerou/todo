import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import routes from './config/routes'

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        {routes}
      </div>
    </Router>
  );
}

export default App;

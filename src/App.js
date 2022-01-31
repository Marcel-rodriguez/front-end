import Header from './components/Header';
import './App.css';
import Login from './components/Login';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path='/login' component={Login} />
        <Route path='/' component={Login} />
    </div>
  );
}

export default App;

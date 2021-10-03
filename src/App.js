import './App.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages';
import Demo from './pages/Demo';
import CardView from './pages/cardview';
import ImageViewer from './pages/ImageViewer/ImageViewer';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/post/:id" component={Demo}/>
      <Route exact path="/post/:id/:name" component={ImageViewer}/>

    </Switch>
    </Router>
  );
}

export default App;
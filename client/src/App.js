import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'



const App = () => {
  

  return (
    <div>
      <Route path = '/' component={NavBar}/>

      <Route exact path='/home' component={Home}>
      </Route>
    </div>
  )
}

export default App;

import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';


const App = () => {
  

  return (
    <div>
    
      <Route path = '/' component={NavBar}/>

      <Route exact path='/home' component={Home}/>
      
      <Route exact path='/add' component={Form}/>

    </div>
  )
}

export default App;

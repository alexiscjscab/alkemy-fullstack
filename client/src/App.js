import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';






const App = () => {
  return (
    <div>
      <Route path = '/' component={NavBar}/>
      <Route exact path='/home'>
        <h2> Challenge Alkemy </h2>
      </Route>
    </div>
  )
}

export default App;

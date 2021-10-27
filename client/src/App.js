import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Edit from './components/Form/Edit';
import Landing from './components/Landing/Landing';

const App = () => {
  

  return (
    <div>

      <Route exact path = '/' component={Landing} />

      {/* <Route path = '/' component={NavBar}/> */}
      <Route path={['/home', '/add', '/all']}>
        <NavBar />
      </Route>

      <Route path='/home' component={Home}/>
      
      <Route path='/add' component={Form}/>

      <Route path='/edit/:id' component={Edit} />


    </div>
  )
}

export default App;

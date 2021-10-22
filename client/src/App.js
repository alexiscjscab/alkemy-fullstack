import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';
import { getOperation } from './actions/actions';



const App = () => {
  
  const dispatch = useDispatch()
  const operaciones = useSelector(state => state.operation)


  useEffect(() => {
    dispatch(getOperation())
  },[dispatch])

  console.log(operaciones)

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

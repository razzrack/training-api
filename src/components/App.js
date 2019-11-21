import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import HomeAuth from './HomeAuth';
import Trainer from './Trainer';
import TrainerAuth from './Trainers';
import Event from './Event';
import EventAuth from './Events';
import Profil from './Profil';
import Auth from './Auth';
import Data from './Data';
import NewData from './NewData';
import About from './About';
import AboutAuth from './Abouts';

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/trainer'} component={Trainer}/>
        <Route path={'/event'} component={Event}/>
        <Route path={'/about'} component={About}/>
        <Auth>
          <Route path={'/homeauth'} component={HomeAuth} />
          <Route path={'/data'} component={Data} />
          <Route path={'/newdata'} component={NewData} />
          <Route path={'/trainers'} component={TrainerAuth}/>
          <Route path={'/events'} component={EventAuth}/>
          <Route path={'/abouts'} component={AboutAuth}/>
          <Route path={'/profile'} component={Profil}/>
        </Auth>
      </Switch>
     </BrowserRouter>
    )
  }
}

export default App;
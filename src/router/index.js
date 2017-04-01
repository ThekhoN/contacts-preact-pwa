// import { Provider } from 'preact-redux';
// import store from '../store';
import { h } from 'preact';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Contacts from '../components/Contacts';
import Contact from '../components/Contact';
import FourOhFour from '../components/FourOhFour';
import { history } from '../store';


export const getRouter = () => (
  <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Contacts }/>
        <Route path='/contact/:contactId' component={ Contact }/>
        <Route path='*' component={ FourOhFour }/>
      </Route>
  </Router>
)

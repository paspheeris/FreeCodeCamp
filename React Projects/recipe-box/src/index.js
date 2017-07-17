import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import { Router, Route, Switch} from 'react-router';
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Import Components
import App from './App';
import RecipeGrid from './components/RecipeGrid';
import Single from './components/Single';






render((<Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={RecipeGrid} />
            <Route path="/recipe/" component={Single} />
          </Switch>
        </App>
      </BrowserRouter>
</Provider>), document.getElementById('root'));

  /*<Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>*/


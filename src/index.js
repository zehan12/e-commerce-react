
import './index.css';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Contact from './components/Contact';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));

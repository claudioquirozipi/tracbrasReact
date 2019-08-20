import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

//Components
import Index from './components';
import Blog from './components/blog';
import Blog1 from './components/blog/blog1';
import Blog2 from './components/blog/blog2';
import Blog3 from './components/blog/blog3';
import Ok from './components/ok';
import Dauer from './components/dauer';
import Serply from './components/serply';
import Uniply from './components/uniply';
import Unipol from './components/unipol';
import Ureply from './components/ureply';
import Velta from './components/velta';
import Form from './components/form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {font-family: 'Montserrat', sans-serif;}
  `;
class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/1" component={Blog1} />
            <Route path="/blog/2" component={Blog2} />
            <Route path="/blog/3" component={Blog3} />
            <Route path="/ok" component={Ok} />
            <Route path="/correias-transportadoras/dauer" component={Dauer} />
            <Route path="/revestimento-poliuretano/ureply" component={Ureply} />
            <Route path="/correias-transportadoras/velta" component={Velta} />
            <Route path="/form" component={Form} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

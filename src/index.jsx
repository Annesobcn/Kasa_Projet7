import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Fiche from './pages/FicheLogement'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import Erreur404 from './pages/404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fichelogement">
          <Fiche />
        </Route>
        <Route path="/about">
          <Apropos />
        </Route>
        <Route path="*">
          <Erreur404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

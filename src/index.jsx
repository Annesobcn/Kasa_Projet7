import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Fiche from './pages/FicheLogement'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'

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
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import "@fontsource/montserrat"

import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import Erreur404 from './pages/404'
import FichePropriete from './pages/FicheLogement'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fichelogement/:id">
          <FichePropriete />
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

import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from '../components/App'
import BookDetails from '../components/BookDetails'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/books/:id" component={BookDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </HashRouter>
)

export default AppRouter

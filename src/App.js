import React from 'react'
import './App.css'
import GlobalStyle from './style/GlobalStyle'
import Header from './components/Header.jsx'
import { Route, Switch } from 'react-router-dom'
import {
  Main,
  SignUpPage,
  SignInPage,
  ShopPage,
  WeddingGeo,
  AnsPage,
} from './pages'
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Sign" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/custom" component={ShopPage} />
        <Route path="/map" component={WeddingGeo} />
        <Route path="/ans" component={AnsPage} />
      </Switch>
    </>
  )
}

export default App

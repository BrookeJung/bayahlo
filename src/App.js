import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import User from './components/Users/User'
import loading from './img/loading.gif'
import Alert from './components/Navbar/Alert'
import About from './components/Pages/About'
import Footer from './components/Footer/Footer'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'

import './App.css'

 const App = () => {
      const [isLoading, setIsLoading] = useState(false)

      // //Search  GitHub Users
      // const searchUsers = async text => {
      //   setTimeout(() => {
      //     setIsLoading(true)
      //   })
      //   //making req to endpoint search/users
      //   await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      //     .then(res => res.json()) 
      //     .then(data => {
      //       setUsers(data.items)
      //       setIsLoading(false)
      //     })
      // }

      //Function to  get single user from GitHub
      // const getUser = async (username) => {
      //   setTimeout(() => {
      //     setIsLoading(true)
      //   })
      //  await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      //   .then(res => res.json()) 
      //   .then(data => {
      //     setUser(data)
      //     setIsLoading(false)
      //   })
      // }

      //Get users repos 
      // const getUserRepos = async (username) => {
      //   setTimeout(() => {
      //     setIsLoading(true)
      //   })
      //   await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      //   .then(res => res.json()) 
      //   .then(data => {
      //     setRepos(data)
      //     setIsLoading(false)
      //   })
      // }

      // Clear users from state
        // const clearUsers = () =>  {
        //   setUsers([])
        //   setIsLoading(false)
        // } 

      // Show Alert
        // const showAlert = (msg, type) => {
        //   setAlert({ msg, type})
        //   setTimeout(() =>  setAlert(null), 4000)
        // }

      return (
        <GithubState>
          <AlertState>
        <Router>
          <Fragment>
            <Navbar /> 
            <div className='container'>
              <Alert />
              {/*    all routes must be enclosed in a switch, Followed by <Route exact path='/' then render={component}> */}
            <Switch>
              <Route exact path='/' render={() => ( 
                <Fragment>
                     <Home />
                        <center>
                        { setIsLoading(false) ? 
                            <img src={loading} alt='pic' className='loader' /> :  isLoading === false }
                        </center>
                </Fragment>
              )} />

                  {/*     this route leads to the about page */}
                  <Route exact path='/about' render={About} />

                  {/*   this route leads to a single user page */}
                  <Route exact path='/user/:login' 
                  component={User} />
                  <Route component={NotFound} />
            </Switch>
         
          </div>
        <Footer />
        </Fragment>
      </Router>
      </AlertState>
      </GithubState>
    )
}
export default App
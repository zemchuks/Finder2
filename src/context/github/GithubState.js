 import React, { useReducer } from 'react'
 import githubContext from './GithubContext'
 import githubReducer from './githubReducer'
 import {
     SEARCH_USERS, SET_LOADING, GET_USER, CLEAR_USERS, GET_REPOS
 } from '../types'

//  let githubClientId;
//  let githubClientSecret;

//  if (process.env.NODE_ENV !== 'production') {
//       githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
//       githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
//  } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET
//  }

 const GithubState = props => {
     const initialState = {
         users: [],
         user: {},
         repos: [],
         isLoading: false
     }
    
     const [state, dispatch] = useReducer(githubReducer, initialState)

     // Search Users
      const searchUsers = async text => {
          setTimeout(() => {
            setIsLoading()
          })
         // making req to endpoint search/users
          await fetch(`https:api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
            .then(res => res.json()) 
            .then(data => {
             dispatch({
                  type: SEARCH_USERS,
                  payload: data.items
              })
           
            })
        }

     // Get User 
     const getUser = async (username) => {
        setTimeout(() => {
          setIsLoading()
        })
       await fetch(`https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
        .then(res => res.json()) 
        .then(data => {
          dispatch ({
              type: GET_USER,
              payload: data
          })
        })
      }


//     // Get Repos
const getUserRepos = async (username) => {
    setTimeout(() => {
      setIsLoading()
    })
    await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
    .then(res => res.json()) 
    .then(data => {
      dispatch({
          type: GET_REPOS,
          payload: data
      })
    })
  }

//     // Clear Users
        const clearUsers = () => dispatch({ type: CLEAR_USERS })

//     // Set Loading
     const setIsLoading = () => dispatch({ type: SET_LOADING })

     return <githubContext.Provider value={{ 
         users: state.users,
         user: state.user,
         repos: state.repos,
         isLoading: state.isLoading,
         searchUsers,
         clearUsers,
         getUser,
         getUserRepos
     }}>
         {props.children}
     </githubContext.Provider>
 }

 export default GithubState
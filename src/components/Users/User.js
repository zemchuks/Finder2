import React, { Fragment, useEffect, useContext } from 'react'
import loading from '../../img/loading.gif'
import { Link } from 'react-router-dom'
import Repos  from '../Repos/Repos'
import GithubContext from '../../context/github/GithubContext'

const User = ({ match }) => {

        const githubContext = useContext(GithubContext)

        const { user, getUser, isLoading,  getUserRepos, repos } = githubContext

        useEffect(() => {
            getUser(match.params.login)
            getUserRepos(match.params.login)
            //eslint-disable-next-line
        }, [])

        const { name,
                avatar_url,
                location,
                bio,
                blog,
                login,
                html_url,
                followers,
                following,
                public_repos,
                public_gists,
                hireable,
                company
                 } = user;

        if(isLoading) return <center>
            <img src={loading} alt='pic' className='loader' />
        </center>

        return (
            <Fragment >
                <Link to='/' className='btn btn-dark'>
                    Back to search
                </Link> 
                Hireable: {''}
                {hireable ? <i className='fa fa-check text-success' /> : <i className='fa fa-times-circle text-danger' /> }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className='round-img' alt='' style={{ width: '150px'}} />
                        <h1>{name}</h1>
                            <p>Location: {location} </p>
                    </div>

                    <div className="">
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'> Visit github profile
                        </a>
                        <ul>
                            <li>{login && (<Fragment>
                                <strong>Username: {login}</strong>
                            </Fragment>
                            )} </li>
                            <li>{company && (<Fragment>
                                <strong>Company: {company}</strong>
                            </Fragment>
                            )} </li>
                            <li>{blog && (<Fragment>
                                <strong>Website: {blog}</strong>
                            </Fragment>
                            )} </li>
                        </ul>
                    </div>
                </div> 

                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers} </div>
                    <div className="badge badge-success">Following: {following} </div>
                    <div className="badge badge-danger">Public Repos: {public_repos} </div>
                    <div className="badge badge-dark">Public Gists: {public_gists} </div>
                </div>

                <Repos repos={repos} />
            </Fragment>
        )
}
export default User
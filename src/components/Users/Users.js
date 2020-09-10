import React, { useContext } from 'react'
import UserItem from './UserItem'
import loading from '../../img/loading.gif'
import GithubContext from '../../context/github/GithubContext'



const Users = () => {
    const githubContext = useContext(GithubContext)

    const { users, isLoading } = githubContext
    if(isLoading) {
        return <center>
            <img src={loading} alt='/' className='loader' />
        </center>

    } else {
        return (
            <div className='grid-3'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
   
}
export default Users
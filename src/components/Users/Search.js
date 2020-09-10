import React, { Fragment,  useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

// useStste was used here
const Search = ({ setAlert }) => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

 const [text, setText] = useState('')

    const handleChange = e => {
            const {value} = e.target
            setText(value)    
    }

    const handleSubmit = (e) => {
     e.preventDefault()
     if (text === '') {
         alertContext.setAlert('Please enter something', 'Light')
     } else {
        githubContext.searchUsers(text);
        setText('')
     }
    }
        
        return (
            <Fragment>
                <form onSubmit={handleSubmit} className='form'>
                   <input type='text' name='text' placeholder='Search users...' onChange={handleChange} value={text} />

                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {githubContext.users.length > 0  && (
                    <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
                )}
            </Fragment>
        )
}

export default Search
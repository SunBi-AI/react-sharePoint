import { MdPostAdd, MdMessage } from 'react-icons/md'
import classes from './MainHeader.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {


  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage/>
            React poster
        </h1>

        <p>
            <Link to="/create-post" className={classes.button}>
                <MdPostAdd size={18}/>
                New Post
            </Link>
        </p>
    </header>
  )
}

export default MainHeader


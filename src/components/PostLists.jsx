import NewPost from './NewPost'
import Post from './Post'
import classes from './Postlists.module.css'
import React from 'react'

const PostLists = () => {
  return (
    <>
      <NewPost />

      <ul className={classes.posts}>
        <Post author="Sherlock Holmes" body="Reknowed ancc fncck memener is solo player"/>
        <Post author="Annola Holmes" body="Check the full course at new location" />
      </ul>
    </>
  )
}

export default PostLists
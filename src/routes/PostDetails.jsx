import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import React from 'react'
import classes from './PostDetails.module.css'

const PostDetails = () => {

    const posts = useLoaderData();

    if(!posts) {
        return(
            <Modal>
                <main className={classes.details}>
                    <h1>could not find any post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>

                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        )
    }
  return (
    <Modal>
        <main className={classes.details}>
            <p className={classes.author}>{posts.author}</p>
            <p className={classes.body}>{posts.body}</p>
        </main>
    </Modal>
  )
}

export default PostDetails;

export async function loader({params}) {
    const response = await fetch('http://localhost:8080/posts/' + params.id);
    const resData = await response.json();
    return resData.post;
}chat
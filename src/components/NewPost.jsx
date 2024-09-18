import Post from './Post'
import classes from './NewPost.module.css'
import react, { useState } from 'react'

const NewPost = () => {

    const [textContent, setTextContent] = useState();

    function inputHandle(event) {
        setTextContent(event.target.value);
    }
  return (
    <>
        <form className={classes.form}>
            <p>
                <label htmlFor="body" className={classes.label}>Text</label>
                <textarea name="" id="body" required rows={3} onChange={inputHandle}></textarea>
            </p>
            <p>{textContent}</p>
            <p>
                <label htmlFor="name" className={classes.label}>Your Name</label>
                <input type="text" id="name" required/>
            </p>
        </form>
    </>
  )
}

export default NewPost
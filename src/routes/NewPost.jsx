// import classes from '../components/NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css'

const NewPost = ({ onAddPost}) => {
  

  return (
    <>
      <Modal>
        <Form className={classes.form} method="post">
            <p>
                <label htmlFor="body" className={classes.label}>Text</label>
                <textarea id="body" name="body" required rows={3} ></textarea>
            </p>

            <p>
                <label htmlFor="name" className={classes.label}>Text</label>
                <input type="text" id="name" name="author" required />
            </p>

            <p className={classes.actions}>
              <Link to='..' type='button' className='linkBtn'>Cancel</Link>
              <button type='submit'>Submit</button>
            </p>
        </Form>
      </Modal>
    </>
  )
}

export default NewPost

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body:JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
     }
  });

  return redirect('/');
}
import '../index.css'
import PostLists from '../components/PostLists';
import { Outlet } from 'react-router-dom';
// import MainHeader from '../components/MainHeader';

function Posts() {
  return (
   <>
    <Outlet/>
    <main>
      <PostLists/>
    </main>
   </>
  );
}

export default Posts;

export async function loader() {   
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
import React, {useRef, useState} from 'react';
import styles from './App.module.css';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Twenty', body: '20'},
    {id:2, title: 'One', body: '1'},
    {id:3, title: 'Pilots', body: 'Description'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={styles.app}>
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список постов'/>
    </div>
  );
}

export default App;

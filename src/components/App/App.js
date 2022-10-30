import React, {useRef, useState} from 'react';
// import Counter from '../Counter';
import styles from './App.module.css';
import PostItem from '../PostItem/PostItem';
import PostList from '../PostList/PostList';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import PostForm from '../PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Twenty', body: 'Description'},
    {id:2, title: 'One', body: 'Description'},
    {id:3, title: 'Pilots', body: 'Description'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className={styles.app}>
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;

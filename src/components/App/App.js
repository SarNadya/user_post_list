import React, {useState} from 'react';
import styles from './App.module.css';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import MySelect from './MySelect/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Twenty', body: 'Valid'},
    {id:2, title: 'One', body: 'Description'},
    {id:3, title: 'Pilots', body: 'About'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className={styles.app}>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title='Список постов'/>
        :
        <h1 className={styles.notfound}> Посты не найдены </h1>
      }
    </div>
  );
}

export default App;

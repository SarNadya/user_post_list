import React, {useMemo, useState} from 'react';
import styles from './App.module.css';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import MySelect from './MySelect/MySelect';
import MyInput from '../MyInput/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Twenty', body: 'Valid'},
    {id:2, title: 'One', body: 'Description'},
    {id:3, title: 'Pilots', body: 'About'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = sort => {
    setSelectedSort(sort);
  }

  return (
    <div className={styles.app}>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск'
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {sortedAndSearchedPosts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
        :
        <h1 className={styles.notfound}> Посты не найдены </h1>
      }
    </div>
  );
}

export default App;

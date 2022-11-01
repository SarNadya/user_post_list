import React, {useMemo, useState} from 'react';
import styles from './App.module.css';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import PostFilter from './PostFilter/PostFilter';
import MyModal from '../MyModal/MyModal';
import MyButton from '../MyButton/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Twenty', body: 'Valid'},
    {id:2, title: 'One', body: 'Description'},
    {id:3, title: 'Pilots', body: 'About'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={styles.app}>
      <MyButton
        style={{marginTop: 30}}
        onClick={() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Список постов'
        />
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import PostFilter from '../PostFilter/PostFilter';
import MyModal from '../MyModal/MyModal';
import MyButton from '../MyButton/MyButton';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/PostService';
import Loader from '../Loader/Loader';
import { useFetching } from '../../hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPost()
  }, []);

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
      {postError &&
        <h2 style={{display: 'flex', justifyContent: 'center', marginTop: 50, color: 'red'}}> Произошла ошибка: {postError} </h2>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <Loader/>
          </div>
        : <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title='Список постов'
          />
      }
    </div>
  );
}

export default App;

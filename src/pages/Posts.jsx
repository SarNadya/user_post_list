import React, {useEffect, useState} from 'react';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import MyModal from '../components/MyModal/MyModal';
import PostFilter from '../components/PostFilter/PostFilter';
import Pagination from '../components/Pagination/Pagination';
import PostList from '../components/PostList/PostList';
import PostForm from '../components/PostForm/PostForm';
import MyButton from '../components/MyButton/MyButton';
import Loader from '../components/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import styles from './Posts.module.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPost, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPost(limit, page)
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePost = (page) => {
    setPage(page);
    fetchPost(limit, page);
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
      <Pagination
        page={page}
        changePost={changePost}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
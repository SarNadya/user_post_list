import React, {useEffect, useRef, useState} from 'react';
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
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/MySelect/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [fetchPost, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPost(limit, page)
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePost = (page) => {
    setPage(page);
  }

  return (
    <div>
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
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Количество постов на странице'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать все'},
        ]}
      />
      {postError &&
        <h2 style={{display: 'flex', justifyContent: 'center', marginTop: 50, color: 'red'}}> Произошла ошибка: {postError} </h2>
      }
      {isPostsLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
          <Loader/>
        </div>
      }
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Список постов'
      />
      <div ref={lastElement}></div>
      <Pagination
        page={page}
        changePost={changePost}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
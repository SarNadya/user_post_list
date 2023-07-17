import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/Loader/Loader';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPost(id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, []);

  return (
    <div>
      <h1>Страница поста №{params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}.{post.title}</div>
      }
      <h2>Комментарии</h2>
      {isLoading
        ? <Loader/>
        : <div>
          {comments.map( com => 
            <div>
              <h3>{com.email}</h3>
              <p>{com.body}</p>
              <hr></hr>
            </div>)}
        </div>
      }
    </div>
  );
};

export default PostPage;
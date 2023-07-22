import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/Loader/Loader';
import { Avatar, List, Space } from 'antd';

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
        : <Space
            direction="vertical"
            size="middle"
            style={{
              display: 'flex',
            }}
          >
            <List
              dataSource={comments}
              itemLayout="horizontal"
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href={`mailto:${item.email}`}>{item.email}</a>}
                    description={item.body}
                  />
                </List.Item>
              )}
            />
          </Space>
      }
    </div>
  );
};

export default PostPage;
import React from 'react';
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Error from '../../pages/Error';
import { Route, Routes } from 'react-router-dom';
import PostPage from '../../pages/PostPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route exact path='/'element={<About/>}/>
        <Route exact path='posts'element={<Posts/>}/>
        <Route exact path='posts/:id'element={<PostPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
  );
};

export default AppRouter;
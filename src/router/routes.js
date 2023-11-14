import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: '/', component: <Home/>, exact: true},
  { path: '/posts', component: <Posts/>, exact: true},
  { path: '/posts/:id', component: <PostPage/>, exact: true},
  { path: '*', component: <Error/>, exact: true},
  { path: '/login', component: <Navigate replace to='/posts'/>, exact: true},
]

export const publicRoutes = [
  { path: '/login', component: <Login/>, exact: true},
  { path: '/', component: <Home/>, exact: true},
  { path: '*', component: <Error/>, exact: true},
  { path: '/posts', component: <Navigate replace to='/login'/>, exact: true},
]
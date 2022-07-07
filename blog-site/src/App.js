import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import Layout from './layout/Layout'
import HomePage from './components/HomePage';
import AuthForm from './components/Auth/AuthForm'
import { UserContext } from "./context/user-context";
import { useContext } from 'react';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/BlogDetail'
import EditBlog from './components/EditBlog';
import SignUpForm from './components/Auth/SignUpForm'
import MyBlogs from './components/blogs/MyBlogs';

function App() {
  const userCtx = useContext(UserContext)
  const login = userCtx.isLoggedin;
  return (
    <Layout>
    <Routes>
    <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<AuthForm />} />
      {login && <Route path='/new-blog' element={<AddBlog />} />}
      <Route path='/home/:blogID' element={<BlogDetail />} />
      <Route path='/home/edit/:blogID' element={<EditBlog />} />
      <Route path='/signup' element={<SignUpForm />} />
      {login && <Route path='/my-blogs' element={<MyBlogs />} />}
      {!login && <Route path='*' element={<Navigate to={'/home'} />} />}
    </Routes>
    </Layout>
  );
}

export default App;

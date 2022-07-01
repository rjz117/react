import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from "react";
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from "./components/store/AuthContextProvider";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {!isLoggedIn && <Route path='/auth' element={<AuthPage />} />}
        {isLoggedIn && <Route path='/profile' element={<UserProfile />} />}
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </Layout>
  );
}

export default App;

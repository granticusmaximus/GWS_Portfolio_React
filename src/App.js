import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './components/constants/routes'
import NavMenu from './components/UI/NavMenu'
import Footer from './components/UI/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'
import AllPosts from './components/pages/AllPosts'
import OnePost from './components/pages/OnePost'
import ThankYou from './components/pages/ThankYou'
import Profile from './components/pages/Account/Profile'
import Register from './components/pages/Account/Register'
import Login from './components/pages/Account/Login'
import VerifyEmail from './components/pages/Account/VerifyEmail'
import { useState, useEffect } from 'react'
import { AuthProvider } from './firebase/AuthContext'
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PrivateRoute from './components/pages/PrivateRoute'
import { Navigate } from 'react-router-dom'
import TaskManager from './components/pages/Tasks/TaskManager'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div>
      <br />
      <NavMenu />
      <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route exact path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PROJECTS} element={<Project />} />
            <Route path={ROUTES.BLOG} element={<AllPosts />} />
            <Route path={ROUTES.SINGLE_POST} element={<OnePost />} />
            <Route path={ROUTES.THANK_YOU} element={<ThankYou />} />
            <Route path={ROUTES.TASK_LIST} element={<TaskManager/>} />
            <Route path={ROUTES.PROFILE} element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
            <Route path={ROUTES.LOGIN} element={
              !currentUser?.emailVerified
                ? <Login />
                : <Navigate to={ROUTES.PROFILE} replace />
            } />
            <Route path={ROUTES.REGISTER} element={
              !currentUser?.emailVerified
                ? <Register />
                : <Navigate to={ROUTES.PROFILE} replace />
            } />
            <Route path={ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />

          </Routes>
        </AuthProvider>
      </Router>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}




export default App;
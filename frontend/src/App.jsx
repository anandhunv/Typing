import { Routes, Route, Navigate } from 'react-router'
import Navbar from './components/Navbar'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import SignUpPage from './pages/SignUpPage'
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore'



function App() {
    const {authUser,checkAuth,isCheckingAuth,onlineUsers }=useAuthStore()
    const {theme }= useThemeStore()

    useEffect(()=>{
      checkAuth()
    },[checkAuth])
  
    console.log(authUser);


    if(isCheckingAuth && !authUser) return (
      <div className='flex items-center justify-center h-screen'>
      <span className="loading loading-ring loadings-xl"></span>

      </div>

    )
  return (
    <div className='' data-theme={theme}>
      <Navbar />

      <div className=" text-white ">
      <Routes>
  <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/signup"} />} />
  <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
  <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
  <Route path="/settings" element={<SettingsPage />  }/>
  <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />} />
</Routes>
<Toaster/>
      </div>
    </div>
  )
}

export default App

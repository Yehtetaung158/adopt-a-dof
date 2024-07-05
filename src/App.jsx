import React from 'react'
// import { useGetDogsQuery } from './store/service/endpoint/authdog'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PepPage from './pages/PepPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Notfound from './pages/Notfound'
import Container from './component/Container'
import AboutPage from './pages/AboutPage'

const App = () => {
  // const {isError,isLoading,data}=useGetDogsQuery();
  // console.log(isError,isLoading,data)
  return (
    <div>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/pep' element={<PepPage/>}/>
       <Route path='/blog' element={<BlogPage/>}/>
       <Route path='/about' element={<AboutPage/>}/>
       <Route path='/contact' element={<ContactPage/>}/>
       <Route path='*' element={<Notfound/>}/>
     </Routes>
    </div>
  )
}

export default App
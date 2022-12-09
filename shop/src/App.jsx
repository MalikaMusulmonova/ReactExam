import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import News from './pages/news/News'
import Login from './Auth/Login/Login'
import AuthProvider from './Auth/AuthProvider/AuthProvider';
import { homeData } from './pages/home/homeData';
import Facebook from './pages/Facebook/Facebook';
import Twitter from './pages/Twitter/Twitter'
import Instagram from './pages/Instagram/Instagram'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index path='/' element={<Home slides={homeData} />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/https://ru-ru.facebook.com/' element={<Facebook/>} />
            <Route path='/https://twitter.com/' element={<Twitter />}/>
            <Route path='/https://www.instagram.com/' element={<Instagram />} />


          </Route>
          
          <Route path='/login' element={
              <AuthProvider >
                <Login />
              </AuthProvider>

            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

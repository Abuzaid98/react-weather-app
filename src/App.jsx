import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CurrentWeather from './currentWeather/CurrentWeather'
import Login from './login/Login'
import RecentCity from './recentCity/RecentCity'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recentCity' element={<RecentCity />} />
          <Route path='/CurrentWeather' element={<CurrentWeather />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
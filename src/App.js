import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

import 
{BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />          
          <Routes>
            <Route path='/' element={<News key="general" country='in' pageSize={6} category="general"/>}></Route>
            <Route path='/business' element={<News key="business" country='in' pageSize={6} category="business"/>}></Route>
            <Route path='/entertainment' element={<News key="entertainment" country='in' pageSize={6} category="entertainment"/>}></Route>
            <Route path='/health' element={<News key="health" country='in' pageSize={6} category="health"/>}></Route>
            <Route path='/science' element={<News key="science" country='in' pageSize={6} category="science" />}></Route>
            <Route path='/sports' element={<News key="sports" country='in' pageSize={6} category="sports" />}></Route>
            <Route path='/technology' element={<News key="technology" country='in' pageSize={6} category="technology" />}></Route>
          </Routes>         
        </Router>       
      </>
    )
  }
}


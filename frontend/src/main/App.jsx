import React from 'react'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './App.css'

import Menu from '../template/menu/Menu'
import Router from './router'

const App = () => (
   
    <div className='container'>
       <Menu />
       <Router />
    </div>
    
)

export default App
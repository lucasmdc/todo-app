import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

const Router = props => (
    <HashRouter>
        <Routes>
            <Route path='/todos' element={<Todo />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Todo />} />
        </Routes>
    </HashRouter>
)

export default Router
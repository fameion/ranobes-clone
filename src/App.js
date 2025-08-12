import React from 'react'

import './App.css'
import Header from './components/header/Header'
import NewStory from './components/NewStory/NewStory'

const App = () => {
  return (
    <div className='App'>
      
      <Header/>
      <NewStory/>
      <NewStory/>
      <NewStory/>
    </div>
  )
}

export default App

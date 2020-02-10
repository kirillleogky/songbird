import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import Main from './components/main/main'

import './style.scss'

ReactDOM.render(
  <>
    <Header />
    <Main />
  </>,
  document.getElementById('wrapper')
)

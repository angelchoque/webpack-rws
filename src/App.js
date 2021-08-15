import React from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.scss'
import './components/header.css'

function App (){
    return (
        <React.Fragment>
            < Header title='Rich and morty API' />
            < Characters />
        </React.Fragment>
    )
}

export default App 
import React from 'react'
import Header from './templates/Header'

class Home extends React.Component{
    render() {
        return(
            <div>
                <Header />
                <h1 align="center" style={{top: '20px'}}>Landing Page</h1>
                <br />
                <h2 align='center'>Work is in progress. Please check after some time...</h2>
            </div>
        )
    }
}

export default Home
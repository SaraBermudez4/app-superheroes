import React from 'react'
import HeroList from '../heroes/HeroList'

const dcScreen = () => {
    return (
        <div>
            <h1>Dc Screen</h1>
            <hr/>
            <HeroList publisher="DC Comics"/>
        </div>
    )
}

export default dcScreen

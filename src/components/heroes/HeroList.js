import React from 'react'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-colomuns">
            {heroes.map(hero => (
                <HeroCard key={hero.id}
                    {...hero}>
                </HeroCard>
            ))
            }
        </div>
    )
}

export default HeroList

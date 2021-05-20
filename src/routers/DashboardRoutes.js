import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/iu/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import SearchScreen from '../search/SearchScreen'

const DashboardRoutes = () => {
    return (
        
        <div>
            <Navbar/>
            <div>
                <Switch>
                <Route exact path = "/marvel" component={MarvelScreen}></Route>
                <Route exact path = "/dc" component={DcScreen}></Route>
                <Route exact path = "/hero/:heroId" component={HeroScreen}></Route>
                <Route exact path = "/search" component={SearchScreen}></Route>
                <Redirect to="/marvel"/>
                </Switch>
            </div>
        </div>
    )
}

export default DashboardRoutes

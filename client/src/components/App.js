import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import About from './AboutUs'
import Home from './Home'
import Available from './AvailablePets'
import AdoptedPets from './AdoptedPets'
import Footer from './Footer'
import '../styles/styles.css'
import AnimalDetails from './AnimalDetails'
import DonateForm from './DonateForm'

const App = () => {
    return (
        <main>
            <Nav />

            <Switch>
                <Route path="/adoption">
                    <AnimalDetails/>
                </Route> 
                <Route path="/donate"><DonateForm /></Route>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/available">
                    <Available />
                </Route>

                <Route path="/adopt">
                    <AdoptedPets />
                </Route>
                
                <Route path="/about">
                    <About />
                </Route>
            </Switch>

            <Footer />
        </main>
    )
}

export default App
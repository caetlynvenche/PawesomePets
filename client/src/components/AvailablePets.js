import React from 'react'
import DogList from './DogList'
import CatList from './CatList'



const changeView = () => {

    const catList = document.getElementById('catList')
    const dogList = document.getElementById('dogList')

    catList.classList.toggle('hidden')
    catList.classList.toggle('notHidden')

    dogList.classList.toggle('hidden')
    dogList.classList.toggle('notHidden')
}

const AvailablePets = () => {
        return (
            <div className="available">
                <button onClick={changeView}> Toggle Pet Type</button>
                <DogList />
                <CatList />
            </div>
        )
    }

    
export default AvailablePets
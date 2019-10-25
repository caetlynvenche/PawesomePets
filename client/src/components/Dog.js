import React from 'react'
import {Link} from 'react-router-dom'


const Dog = (props) => {    
        return (
            <div className="indPet">
                <img src={props.image} alt='dog'/>
                <h3>Name: {props.name}</h3>
                <h5>Breed: {props.breed}</h5>
                <h5>Gender: {props.gender}</h5>
                <h5>Size: {props.size}</h5>
                <h5>Age: {props.age}</h5>
                {props.shed ? <h5>Sheds: Yes</h5> : <h5>Sheds: No</h5>}
                {props.goodWithKids ? <h5>Good with Kids: Yes!</h5> : <h5> Good with Kids: Unfortunately, No</h5>}
                {props.goodWithPets ? <h5>Good with Other Pets: Yes!</h5> : <h5>Good with Kids: Better kept with no other pets</h5>}
                <Link to={{pathname: '/adoption', state:{animalId: props._id, dogArray: props.dogArray} }}
                >Adopt Me</Link>
            </div>
        )
    }

export default Dog
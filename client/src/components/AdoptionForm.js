import React, {Component} from 'react'

class AdoptionForm extends Component{
    constructor(){
        super()
        this.state={
            name: "",
            emailaddress: "",
            phone: "",
            contactTime: "",   
            animalAdopting: ""

        }
        
    }
    handleChange = e =>{
        this.setState({
        [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }
    handleSubmit = e =>{
        e.preventDefault()
        const submits = `
            name: ${this.state.name},
            emailaddress: ${this.state.emailaddress},
            phone: ${this.state.phone},
            contactTime: ${this.state.contactTime},
            animal: ${this.state.animalAdopting}
        `
        alert(submits)
    }
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>

                <label>Full Name</label>
                <input
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="Name"/>
                
                <label>Email Address</label>
              <input
                type="email"
                name="emailaddress"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email Address"/>
                
                <label>Contact Number</label>
             <input
                type="tel" 
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Contact Number"/>
                
            <select name='animalAdopting' value={this.state.animalAdopting} onChange={this.handleChange}>
                <option placeholder="selectOne">Select Pet</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
            </select> 
            
            <select name='contactTime' value={this.state.contactTime} onChange={this.handleChange}>
                <option placeholder="Best time to contact">Best Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
            </select>

            <button>Submit</button>       
            </form> 
            </div>
        )
    }
    
}
export default AdoptionForm
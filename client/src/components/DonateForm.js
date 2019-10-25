import React, {Component} from 'react'

class DonateForm extends Component{
    constructor(){
        super()
        this.state={
            donation: '',
            name: '',
            email: '',
            address: '',
            phone: ''


        }
    }
    handleChange = e =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
        const submit = `
            donation: ${this.state.address},
            name: ${this.state.name},
            email: ${this.state.email},
            address: ${this.state.address},
            phone: ${this.state.phone}
        `
        alert(submit)
    }

    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                  <label>Donation Amount</label>
                <input
                type="text" 
                name="donation" 
                value={this.state.donation} 
                onChange={this.handleChange} 
                placeholder="Donation"/>
                
                <label>Name</label>
               <input
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="Name"/>
                
                <label>Email Address</label>
                <input 
                type="text" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                placeholder="Email"/>
                
                <label>Address</label>
                <input
                type="text" 
                name="address" 
                value={this.state.address} 
                onChange={this.handleChange} 
                placeholder="Address"/>
                
                <label>Phone</label>
                <input 
                type="tel" 
                name="phone" 
                value={this.state.phone} 
                onChange={this.handleChange}
                placeholder="Phone"/>
                <button>Submit</button>
              </form>
            </div>
        )}    
    
}

export default DonateForm
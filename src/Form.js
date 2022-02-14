import React, { Component} from 'react';
import axios from "axios";

class Form extends Component{
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        console.log(resp.data);
    }; catch (error){
        console.log(error)
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder='Github Username' 
                    value={ this.state.userName } 
                    onChange={ event => this.setState ({ userName: event.target.value }) }
                    required/>
                    <button>Add card</button>
                </form>
            </div>
        )
    }
}

export default Form;
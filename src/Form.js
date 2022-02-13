import React, {Component} from 'react';

class Form extends Component{
    userNameInput = React.createRef();
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form action='' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Github Username' ref={this.userNameInput} required/>
                    <button>Add card</button>
                </form>
            </div>
        )
    }
}

export default Form;
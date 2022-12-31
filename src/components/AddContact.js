import React from 'react';
import { withRouter } from '../withRouter';

class AddContact extends React.Component {
    state = {
        name: "",
        number: "",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.number === ""){
            alert("You must fill in all fields");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", number: ""});

        this.props.navigate("/");

    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Number</label>
                        <input 
                        type="text" 
                        name="number" 
                        placeholder="Phone Number" 
                        value={this.state.number} 
                        onChange={(e) => this.setState({number: e.target.value})} 
                        />
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AddContact);
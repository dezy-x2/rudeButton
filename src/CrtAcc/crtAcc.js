import React from 'react';
import './crtAcc.css';

class CrtAcc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.thing  = this.thing.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    thing = () => {return "foo";};

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
      }

      handlePasswordChange(event) {
        this.setState({ password: event.target.value });
      }

    render() {
        return (
            <div>
                <form>
                    <label>Username</label>
                    <br />
                    <input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username here" />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="text" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password here" />
                </form>
            </div>
        )
    }
}

export default CrtAcc;
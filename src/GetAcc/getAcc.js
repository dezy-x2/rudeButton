import React from 'react';
import './getAcc.css';

class GetAcc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            insult: "",
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendToApi = this.sendToApi.bind(this);
        this.handleResp = this.handleResp.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
      }

      handlePasswordChange(event) {
        this.setState({ password: event.target.value });
      }

      handleClick() {
        if (this.state.username !== "" && this.state.password !== ""){
            this.sendToApi();
        } else {
            this.setState({ insult: "Both fields must be filled in in order to process request" })
        }
    }

    async sendToApi() {
        let username = this.state.username;
        let password = this.state.password;
        const res = await fetch(`http://localhost:9000/acc/fetch/${password}/${username}`);
        const text = await res.text();
        const status = await res.status;
        this.handleResp(text, status);
      }

      handleResp(text, status) {
          if (199 < status < 300) {
            this.setState({ insult: `${text}`, username: "", password: "" });
          } else {
              this.setState({ insult: `Sorry something has gone wrong; text: ${text}, status: ${status}` });
          }
          
        
    }

    render() {
        return(
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
                <button onClick={this.handleClick} >Confirm</button>
                <br />
                {this.state.insult}
            </div>
        )
    }
}

export default GetAcc;
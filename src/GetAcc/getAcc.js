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
        await fetch(`http://localhost:9000/acc/fetch/${password}/${username}`)
        .then(res => res.text())
        .then(res => this.handleResp(res));
      }

      handleResp(res) {
          this.setState({ insult: `${res}`, username: "", password: "" })

        // if (res.status === 200) {
        //   this.setState({ insult: `Created!, your insult is '${res.text()}',${res.status}`, username: "", password: "" });
        //   alert("he");
        // } else {
        //     this.setState({ insult: "Sorry something has gone wrong please try again" });
        // }
        
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
import React from 'react';
import './crtAcc.css';

const adjectives = ["idiotic", "stupid", "ugly", "dumb", "weird", "nerdy", "lazy", "boring", "lame", "illiterate"];
const nouns = ["log", "dog", "brick", "chair", "mound of dirt", "rock", "tree stump", "idiot", "nerd", "tool"];

class CrtAcc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            created: "",
            insult: this.insultGenarator(),
            apiResp: "",
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendToApi = this.sendToApi.bind(this);
        this.insultGenarator = this.insultGenarator.bind(this);
        this.handleResp = this.handleResp.bind(this);
    }

    insultGenarator() {
        let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        let noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `You are a ${adj} ${noun}`
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
      }

      handlePasswordChange(event) {
        this.setState({ password: event.target.value });
      }

      handleClick() {
          const rand = Math.random();
          if (rand >= 0.01) {
            if (this.state.username !== "" && this.state.password !== ""){
                this.sendToApi();
            } else {
                this.setState({ created: "Both fields must be filled in in order to process request" })
            }
          } else {
              this.setState({ created: "Request denied - reason: 'Too much of a loser'" });
          }
          
      }

        async sendToApi() {
        let username = this.state.username;
        let password = this.state.password;
        let insult = this.state.insult;
        const res = await fetch(`http://localhost:9000/acc/crt`, {
            method: "POST",
            body: JSON.stringify({"username": username, "password": password, "phrase": insult}),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const status = await res.status;
        this.handleResp(status);
      }

      handleResp(status) {
          if (199 < status < 300) {
            this.setState({ created: `Created!, your insult is '${this.state.insult}'`, username: "", password: "" });
          } else {
              this.setState({ created: "Sorry something has gone wrong, that username may already be taken" });
          }
          
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
                <button onClick={this.handleClick} >Confirm</button>
                <br />
                {this.state.created}
            </div>
        )
    }
}

export default CrtAcc;
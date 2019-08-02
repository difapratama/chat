import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            message: ""
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({ user: event.target.value })
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.user.length && !this.state.message.length) {
            return
        }
        const newData = {
            id: Date.now(),
            user: this.state.user,
            message: this.state.message
        }
        this.props.addChat(newData);
        this.setState({ user: "", message: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your Name" className="form-control" name="user" value={this.state.user} onChange={this.handleUserChange} />
                <br />
                <textarea className="form-control" name="message" value={this.state.message} onChange={this.handleMessageChange}
                    placeholder="Write Your Chat Here" ></textarea>
                <br></br>
                <button type="submit" className="btn btn-primary form-control">Post</button>
            </form>
        )
    }
}

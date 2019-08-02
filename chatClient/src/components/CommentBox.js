import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatForm from './ChatForm';
import io from 'socket.io-client';
import CommentList from './CommentList';
export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.addChat = this.addChat.bind(this);
        this.deleteChat = this.deleteChat.bind(this);
        this.socket = io('http://localhost:3000')
    }

    componentDidMount() {
        this.socket.on("messages", data => {
            this.setState({ data: data })
        })
    }

    addChat(item) {
        this.setState(state => ({
            data: [...state.data, item]
        }))
        this.socket.emit("addData", item)
    }

    deleteChat(id) {
        this.setState((state, props) => ({
            data: state.data.filter((item) => item.id !== id)
        }))
        this.socket.emit("deleteChat", id)
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header"><center><strong>React Chat</strong></center>
                    </div>
                    <div className="card-body">
                        < CommentList data={this.state.data} deleteChat={this.deleteChat} />
                    </div>
                    <div className="card-footer">
                        < ChatForm addChat={this.addChat} />
                    </div>
                </div>
            </div>
        )
    }
}
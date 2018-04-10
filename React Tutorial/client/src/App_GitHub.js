import React, { Component } from 'react';
import './styler.css';
import axios from 'axios';

const Card = (props) => {
    return (
        <div className="info">
            <img className="profile-pic" src={props.avatar_url} alt=""/>
            <div className="data-container">
                <div className="user-name">{props.name}</div>
                <div className="comp-name">{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};

class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event: Form Submit", this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.userName}
                onChange={(event) => this.setState({ userName: event.target.value })}
                placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    };
};

class App extends Component {
    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    };
};
  
export default App;
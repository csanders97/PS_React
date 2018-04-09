import React, { Component } from 'react';
import './styler.css';

const Card = (props) => {
    return (
        <div className="info">
            <img src="http://placehold.it/75" />
            <div>
                <div>Name here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <div>
                <Card />
            </div>
        );
    }
}
  
export default App;
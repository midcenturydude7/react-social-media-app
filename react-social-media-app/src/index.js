import React from 'react';
import ReactDOM from 'react-dom'

function App() {
    const people = ["Matt", "Henry", "Felix", "Finn", "Corrie"];
    return (
        <ol>
            {people.map(person => (
            <li><h1>{person}</h1></li>
            ))}
        </ol>
    );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
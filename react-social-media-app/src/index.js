import React from 'react';
import ReactDOM from 'react-dom'

function App() {
    const [developerInfo, setDeveloperInfo] = React.useState({
        language: "python",
        yearsExperience: 0
    })

function handleChangeLanguage() {
    setDeveloperInfo({
        language: "javascript",
        yearsExperience: 0
    });
}

function handleChangeYearsExperience(event) {
    setDeveloperInfo({
        ...developerInfo,
        yearsExperience: event.target.value
        });
}

    return (
        <div>
            <button onClick={handleChangeLanguage}
            >Change language
            </button>
            <div>
                <input 
                    type="number"
                    onChange={handleChangeYearsExperience}
                />
            </div>
                <p>I am learning the following language: {developerInfo.language}</p>
                <p>I have the following years of experience as a developer: {developerInfo.yearsExperience}</p>
        </div>
    );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
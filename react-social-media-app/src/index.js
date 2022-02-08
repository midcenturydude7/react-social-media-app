import React from 'react';
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>Hello, {props.username}!</h1>;
};

function Layout(props) {
    return <div style={{ background: "palegoldenrod" }}>{props.children}</div>;
}

const rootNode = document.getElementById('root');

ReactDOM.render(
    <Layout>
        <Header username="Matt" />
        <footer>Copyright 2022</footer>
    </Layout>,
    rootNode
);
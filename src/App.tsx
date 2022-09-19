import React from 'react';
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import './css/App.css';
import './css/index.css';

export default class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
    };

    render() {
        return (
            <div className="component-app">
                <main>
                    <NavBar/>
                    <Main/>
                    <Footer/>
                </main>
            </div>
        );
    }
}

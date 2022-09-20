import React, {lazy, Suspense} from 'react';
import './css/App.css';

const Footer = lazy(() => import ("./components/Footer"));
const Main = lazy(() => import ("./components/Main"));
const NavBar = lazy(() => import ("./components/NavBar"));

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
                    <Suspense fallback={<div>Loading...</div>}>
                        <NavBar/>
                        <Main/>
                        <Footer/>
                    </Suspense>
                </main>
            </div>
        );
    }
}

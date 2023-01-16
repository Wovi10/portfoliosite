import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import ("./App"));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App/>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

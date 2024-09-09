import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title /> si mando el prop de esta manera sin especificar lo que quiero mandar, se manda como un booleano(true)  */}
        <CounterApp/>
        {/* <FirstApp title ="SoyFlorencia" subTitle={123} /> */}
    </React.StrictMode>
)

import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';

const App = () => (

    <div className="container">
        <h1 className="center">REDUX TO DO LIST</h1>
        <Route path="/" exact component={List} />
    </div>

);

export default App;

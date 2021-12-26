import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import LifeMotto from './components/index/LifeMotto';

//import boostrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
        <MyNavbar />
        <LifeMotto />
        </>
    );
}

export default App;

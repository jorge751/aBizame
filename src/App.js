
//
//  Lanza la aplicación !!!
//

//	Framework !!!
import React from 'react';

//	Administración !!!

//	Comercio !!!

//	Compartido !!!
import { Navbar, Footer } from './shared';

//  Ruteo !!!
import Router from './Router';

//	CSS !!!
import './App.css';

//	Default !!!
export default function App() {

    //	Render !!!
    return (
        <div className='App'>
            <Navbar />
            <Router />
            <Footer />
        </div>
    );

};

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Redirect, Route , Switch } from 'react-router-dom';
import About from './About';
import Contect from './Contect';
import Home from "./Home";
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

const Routea = () => {

    return (
<>
<Navbar />
<switch>
<Route exact path="/" component={Home} />
<Route exact path="/contect" component={Contect} />
<Route exact path="/about" component={About} />
<Route exact path="/service" component={Service} />
<Redirect to="/" />
<Footer />
</switch>


</>
    );


};
export default Routea;
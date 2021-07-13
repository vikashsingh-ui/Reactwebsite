import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/monkey.gif';
import Component from "./Component";

const About = () => {
    return (
        <>

          <Component 
          name="Welcome to about page"
           imgsrc={web} visit="/contect"
            btname='Contact Now'
             />

        </>
    );

};



export default About;
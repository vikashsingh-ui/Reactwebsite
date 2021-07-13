import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/boy.gif';
import Component from "./Component";

const Home = () => {
    return (
        <>
            <Component
                name="Grow your Business with"
                imgsrc={web} visit="/service"
                btname='Get started'
            />


        </>
    );

};



export default Home;
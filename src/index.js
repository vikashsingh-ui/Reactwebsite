import React from 'react';
import ReactDom from 'react-dom';
import "./indexs.css";
// import Gookeep from './Gookeep';
// import CompA from './CompA';
import Routea from './Routea';
import { BrowserRouter } from 'react-router-dom';



ReactDom.render(
    <>
    <BrowserRouter>
        <Routea />
    </BrowserRouter>
</>
    , document.getElementById('root')
);


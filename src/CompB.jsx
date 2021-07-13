import react, { useContext } from 'react';
import CompC from './CompC';
import { Firstname } from './Gookeep';

const CompB = () => {
    const fname = useContext(Firstname);
return <h1> my name is {fname} </h1>

};

export default CompB;
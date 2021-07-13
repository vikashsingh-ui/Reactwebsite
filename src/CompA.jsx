import react, { useEffect, useState } from 'react';
// import CompB from './CompB';
import axios from "axios";

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMove] = useState();

useEffect( ()=> {
async function getData(){
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/5');
    console.log(res.data.name);
    setName(res.data.name);
    setMove(res.data.moves.length);
}
getData();
})

    return (
        <>
            <h1>you choose {num} value  </h1>
            <h1>My name is {name}  </h1>
            <h1>I have {moves} moves </h1>

            <select name="" id="" value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>

                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>


            </select>

        </>
    );

};

export default CompA;
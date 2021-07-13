import React, { createContext } from "react";
import CompA from './CompA';

const Firstname = createContext();


const Gookeep = () => {
return (
<>
<Firstname.Provider value={"vikash singh"}>
<CompA />
</Firstname.Provider>
</>
    );
};

export default Gookeep;
export { Firstname };
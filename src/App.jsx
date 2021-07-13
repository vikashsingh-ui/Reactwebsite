import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
const App = () => {

   const [inputlist, setInputlist] = useState("");
   const [items, setitems] = useState([]);

   const itemEvent = (event) => {

      setInputlist(event.target.value);
   };

   const listofitems = () => {
      setitems((olditems) => {
         return [...olditems, inputlist];
      });
      setInputlist("");
   };
   const deleteitems = (id) => {
console.log("deleted");
setitems( (olditems) => {
   return olditems.filter(( arrEle , index) => {
      return index !== id;
   });
});
   };

   return (
      <>
         <div className="main_div">

            <div className="center_div">
               <br />
               <h1> ToDo List</h1>
               <br />
               <input type="text" placeholder="Add a items" onChange={itemEvent}
                  value={inputlist}
               />
               
      <Tooltip title="Add" aria-label="add">
               <Button onClick={listofitems} > < AddIcon /> </Button>
</Tooltip>
               <ol>


                  {
                     items.map((itemval , index)  => {
                        return  < TodoList key={index}

                         id={index} 
                            
                          text = {itemval}
                        OnSelect = {deleteitems}
                           />;
                          
                  
                     }
                     )
                  }

               </ol>

            </div>

         </div>


      </>
   );

};
export default App;
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
const TodoList = (props) => {



    return (
        <>

        <div className="todo_style">
        <i  className="fa fa-times" aria-hidden="true"
        onClick={ () => {
            
            props.OnSelect(props.id); }}
        > < ClearIcon /> </i> 
        <li> {props.text} </li>
        </div>

        </>
        );

};
export default TodoList;
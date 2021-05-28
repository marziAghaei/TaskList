import React from"react";
import Proptypes from "prop-types";


const Button = ({btnName,classes,onClick}) => {
   
    return(
        <button onClick={(event)=>onClick(event,"test")} 
        className={`btn ${classes}`}>{btnName}</button>  
    )   
};


Button.propTypes = {
btnName: Proptypes.string,
classes: Proptypes.string,
onClick:Proptypes.func,
};
export default Button;



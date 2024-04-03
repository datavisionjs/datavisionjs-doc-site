import { useState } from "react";

const MenuButton = ({id}) => {

    const toggleVisibility = () => {
        const element = document.getElementById(id);
        
        if(element.classList.contains("doc-left-hide")){
            element.classList.remove("doc-left-hide");
        }else {
            element.classList.add("doc-left-hide");
        }
    };
  
    return (
        <>
            <div onClick={toggleVisibility} className="menu-button">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </>
    );
};
    
export default MenuButton;
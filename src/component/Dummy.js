import React from "react";
import {useNavigate} from 'react-router-dom';
 import Button from "./Button";

 const buttonStyles = {
    backgroundImage: "linear-gradient(to right, #8e54e9, #4976e6)",
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
    } 


const Dummy = () => {

     const navigate = useNavigate();

    const onBackClick = (e) => {
        e.preventDefault();

        //navigate(-1)
        navigate("/")
    }

    return(
    <div className="dummy">
        <p>
        This page provides Dummy data of any kind for your project choice.
        It's not part of this project's scope.
        </p>
        <Button style = {buttonStyles} onClick={onBackClick} text = "Back to Main"/>
   </div>
    )
}

export default Dummy;



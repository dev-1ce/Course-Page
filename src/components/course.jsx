import React from "react";

export default function Course(props){

    return (
    <>
        <img src={props.image} alt="" />
         <h1>{props.title}</h1>
         <h2>Instructor</h2>
    </>)
}
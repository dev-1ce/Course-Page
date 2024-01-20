import React from "react";
import { useState } from "react";
import data from "./data.json"
import Course from "./components/Course";
export default function Home(){

    const [filterCourse,setFilterCourse]= useState(data)
    function handle(e){
        setFilterCourse(()=>{
            return (data.filter((i)=>i.name.includes(e.target.value)||i.instructor.includes(e.target.value)))
        })
    }
    return<>
    <input type="text" placeholder="type course name" onChange={(e)=>handle(e)}/> <br />
    {
        filterCourse.map((i)=>{
            return (<Course  key= {i.id}title = {i.name} image = {i.thumbnail}/>)
        })
    }
    </>
}
import App from "../App";
import { useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";


const UpdateItem = ({ item }) => {
const location = useLocation()
const {id}=location.state
 console.log(id)
    const [name,setName] = useState(" ");
    const [status,setStatus] = useState(" ");

    
    // 1. Create a state for the form

    const handleSubmit = async(e) => {
        e.preventDefault();
    const {data}=    await axios.put(`http://localhost:8000/doors/${id}`,{name,status})
    console.log(data)
    }
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes

    // your code here
    return (
        <div>
            <form action="" onClick={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="status">Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)}>status
                    <option value="open">open</option>
                    <option value="closed">closed</option>
                </select>


                <button type="update">Update</button>
            </form>

        </div>
    );
};

export default UpdateItem;

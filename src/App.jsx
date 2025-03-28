import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";


// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://localhost:8000/doors`
  // Get the existing item from the server
function App(){  
  const [item, setItem] = useState([]);
  const nav=useNavigate()
  useEffect(()=>{
   const data= async()=>{
    try{
      const {data}=await axios.get(API_URI)
      console.log(data)
   
      setItem(data)
    }
    catch(e){
      console.log(e)
    }
   }
   data()
  },[item])
  // pass the item to UpdateItem as a prop
console.log(item)

  return (
  <>
  
  {
    item.map((item,ind)=>(
      <div key={ind}>
      <h1>{item.name}</h1>
      <h4>{item.status}</h4>
      <button onClick={()=>nav('/update',{state:{id:item.id}})}> edit</button>
      </div>

    ))
  }
  <Routes>
    <Route path="/update" element={<UpdateItem/>}/>
  </Routes>
  </>
)}

export default App;
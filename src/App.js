import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
const [data,setData]= useState()
const[search, setSearch]=useState("dehradun")

useEffect(()=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5664d7684ed475b5c3d11fa454a6113a`
  fetch(url).then(resp=>resp.json())
  .then(resp =>setData(resp.main))

  
},[search])


  return (
    <div className="parent">
     
     <input type="search"  onChange={(event)=>setSearch(event.target.value)}  className="fill" placeholder='Type city name....'/>
    <div className="init">
    <h2>{search}</h2>

      </div>
     {
       !data ? (
         <div className="error">

           <p>City not found</p>
         </div>
       )  : (
         <div className="init">
<h3>{data.temp}°C</h3>
<div className="tempre">
<h4> Min-temp {data.temp_min} || Max-temp {data.temp_max}</h4>
</div>

         </div>
       )
     }
     <div className="footer">
       <h5>Copyright © 2022 Made with ❤️ by Ajay Anthwal</h5>
     </div>
    
    </div>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=5664d7684ed475b5c3d11fa454a6113a
